# Sanity Webhook Setup for Revalidation

Denne guiden forklarer hvordan du setter opp Sanity webhook for automatisk revalidering av prosjekter på buggedigital.no.

## Problem

Prosjekter som oppdateres i Sanity Studio vises ikke umiddelbart på den hostede versjonen av buggedigital.no på grunn av caching.

## Løsning

Vi har implementert tag-based revalidation med Sanity webhooks. Når du oppdaterer et prosjekt i Sanity, sender Sanity en webhook til Next.js som revaliderer de relevante sidene.

## Setup

### 1. Generer en hemmelig nøkkel

Generer en sikker nøkkel for webhook-autentisering:

```bash
openssl rand -base64 32
```

Eller bruk en online generator: https://generate-secret.vercel.app/32

### 2. Legg til miljøvariabel i Vercel

1. Gå til Vercel Dashboard → Ditt prosjekt → Settings → Environment Variables
2. Legg til:
   - **Key**: `SANITY_REVALIDATE_SECRET`
   - **Value**: Den genererte nøkkelen fra steg 1
   - **Environment**: Production (og Preview hvis ønskelig)

### 3. Sett opp webhook i Sanity

1. Gå til https://sanity.io/manage
2. Velg prosjektet "BuggeDigital Studio" (projectId: er5um3hh)
3. Gå til **API** → **Webhooks**
4. Klikk **Create webhook**
5. Fyll inn:
   - **Name**: `Revalidate Projects`
   - **URL**: `https://buggedigital.no/api/revalidate`
   - **Dataset**: `production`
   - **Trigger on**: Velg `Create`, `Update`, og `Delete`
   - **Filter**: `_type == "project"`
   - **HTTP method**: `POST`
   - **API version**: `v2021-03-25` eller nyere
   - **Secret**: Legg til header `x-sanity-secret` med verdien fra steg 1
   - **Include drafts**: Nei (unchecked)

6. Klikk **Save**

### 4. Test webhook

1. Oppdater et prosjekt i Sanity Studio
2. Vent noen sekunder
3. Besøk buggedigital.no/prosjekter og sjekk at endringene vises

## Hvordan det fungerer

1. Når du oppdaterer et prosjekt i Sanity Studio, sender Sanity en POST-forespørsel til `/api/revalidate`
2. Endpointet verifiserer at forespørselen kommer fra Sanity ved å sjekke `x-sanity-secret` header
3. Hvis autentiseringen er OK, revalideres alle prosjektsider ved hjelp av Next.js `revalidateTag` og `revalidatePath`
4. Neste gang noen besøker siden, vil de se de oppdaterte prosjektene

## Feilsøking

### Webhook fungerer ikke

1. Sjekk at `SANITY_REVALIDATE_SECRET` er satt i Vercel
2. Sjekk Vercel logs for feilmeldinger
3. Verifiser at webhook URL-en er korrekt i Sanity
4. Sjekk at secret header-navnet er `x-sanity-secret` (ikke `X-Sanity-Secret`)

### Prosjekter oppdateres fortsatt ikke

1. Sjekk at webhook faktisk sender forespørseler (se Sanity webhook logs)
2. Verifiser at dataset er `production` i både webhook og kode
3. Sjekk at `useCdn` er satt korrekt i `src/app/lib/sanity.js`

## Alternativ: Manuell revalidation

Hvis webhook ikke fungerer, kan du manuelt revalidere ved å gjøre en POST-forespørsel:

```bash
curl -X POST https://buggedigital.no/api/revalidate \
  -H "x-sanity-secret: DIN_SECRET_NØKKEL"
```

