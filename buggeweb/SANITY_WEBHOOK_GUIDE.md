# Komplett Guide: Sanity Webhook Konfigurasjon

## Steg-for-steg instruksjoner for å sette opp webhook i Sanity

### 1. Gå til Sanity Manage Dashboard

- Gå til: https://sanity.io/manage
- Logg inn med din Sanity-konto
- Velg prosjektet **"BuggeDigital Studio"** (projectId: `er5um3hh`)

### 2. Naviger til Webhooks

- Klikk på **API** i venstre meny
- Klikk på **Webhooks** i undermenyen
- Klikk på **Create webhook** knappen

### 3. Fyll ut alle feltene:

#### **Name** (Navn)

```
Revalidate Projects
```

_Beskrivende navn for webhooken_

#### **URL** (Webhook URL)

```
https://buggedigital.no/api/revalidate
```

_Full URL til revalidate-endpointet på nettsiden_

#### **Dataset** (Dataset)

```
production
```

_Velg "production" fra dropdown-menyen_

#### **Trigger on** (Når skal webhook aktiveres?)

✅ **Create** - Når et nytt prosjekt opprettes  
✅ **Update** - Når et prosjekt oppdateres  
✅ **Delete** - Når et prosjekt slettes

_Velg alle tre alternativene_

#### **Filter** (Filter)

```
_type == "project"
```

_Bare send webhook når dokumentet er av typen "project"_

#### **HTTP method** (HTTP-metode)

```
POST
```

_Velg POST fra dropdown-menyen_

#### **API version** (API-versjon)

```
v2021-03-25
```

_Eller nyere versjon (f.eks. v2024-01-01)_

#### **HTTP Headers** (HTTP-headere)

Klikk på **Add header** og legg til:

**Header name:**

```
x-sanity-secret
```

**Header value:**

```
Vk7HjJG5rufui9kiMkoxSZiHts6H7cmrf8O94zZpWQ8=
```

_Dette er den hemmelige nøkkelen som autentiserer webhook-forespørslene_

#### **Include drafts** (Inkluder utkast)

❌ **Ikke huk av** (unchecked)
_Vi vil bare revalidere publiserte prosjekter, ikke utkast_

#### **Projection** (Projeksjon)

_La stå tomt_ (ikke nødvendig)

### 4. Lagre webhook

- Klikk på **Save** eller **Create webhook** knappen
- Webhooken er nå aktiv!

### 5. Test webhooken

1. Gå til Sanity Studio og oppdater et prosjekt
2. Vent 5-10 sekunder
3. Besøk https://buggedigital.no/prosjekter
4. Sjekk at endringene vises

### 6. Sjekk webhook-logs (valgfritt)

I Sanity Manage Dashboard:

- Gå til **API** → **Webhooks**
- Klikk på webhooken du nettopp opprettet
- Se **Recent deliveries** for å se om webhook-forespørslene går gjennom

## Viktige notater

⚠️ **URL må være produksjons-URL**

- For lokal testing: Bruk `http://localhost:3000/api/revalidate` (kun for testing)
- For produksjon: Bruk `https://buggedigital.no/api/revalidate`

⚠️ **Secret header**

- Header-navnet må være nøyaktig: `x-sanity-secret` (små bokstaver)
- Verdi må matche `SANITY_REVALIDATE_SECRET` i Vercel miljøvariabler

⚠️ **Dataset**

- Må være `production` (ikke `development` eller `staging`)

## Feilsøking

### Webhook sender ikke forespørsler

- Sjekk at webhook er aktivert (grønn status)
- Sjekk at filter er korrekt: `_type == "project"`
- Sjekk at dataset er `production`

### Webhook sender, men revalidation fungerer ikke

- Sjekk Vercel logs for feilmeldinger
- Verifiser at `SANITY_REVALIDATE_SECRET` er satt i Vercel
- Sjekk at secret-verdien matcher i både Sanity og Vercel

### 401 Unauthorized feil

- Sjekk at header-navnet er `x-sanity-secret` (ikke `X-Sanity-Secret`)
- Verifiser at secret-verdien er identisk i Sanity og Vercel
