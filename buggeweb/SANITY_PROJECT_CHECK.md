# Sjekkliste: Hvilket Sanity-prosjekt brukes hvor?

## Problem

Du har to Sanity-prosjekter i dashboardet:

- "buggedigital"
- "buggedigital studio"

Og du ser forskjeller mellom lokale prosjekter og produksjon.

## Steg 1: Finn Project IDs

1. Gå til https://sanity.io/manage
2. For hvert prosjekt, klikk på det og sjekk **Project ID**:
   - **"buggedigital"** har Project ID: `???`
   - **"buggedigital studio"** har Project ID: `er5um3hh`

## Steg 2: Sjekk lokale miljøvariabler

I `/buggeweb/.env.local`:

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=er5um3hh
NEXT_PUBLIC_SANITY_DATASET=production
```

## Steg 3: Sjekk Vercel miljøvariabler

1. Gå til Vercel Dashboard → Ditt prosjekt → Settings → Environment Variables
2. Sjekk om `NEXT_PUBLIC_SANITY_PROJECT_ID` er satt
3. Hvis den er satt, hva er verdien?
   - Hvis den er forskjellig fra `er5um3hh`, kan det forklare forskjellen!

## Steg 4: Sjekk datasets

I begge Sanity-prosjekter, sjekk hvilke datasets som finnes:

- `production`
- `development`
- `staging`

## Steg 5: Test hvilket prosjekt som faktisk brukes

### Lokalt:

```bash
cd buggeweb
npm run dev
```

Åpne browser console og kjør:

```javascript
console.log("Project ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
```

Eller sjekk i koden ved å legge til en debug-logg i `src/app/lib/sanity.js`:

```javascript
console.log("Using Sanity Project:", projectId, "Dataset:", dataset);
```

### I produksjon:

Gå til https://buggedigital.no og åpne browser console, eller sjekk Vercel logs.

## Løsning: Standardiser på ett prosjekt

### Alternativ 1: Bruk samme prosjekt overalt (anbefalt)

1. **Velg hvilket prosjekt som skal være "master"**

   - Anbefaler: "buggedigital studio" (projectId: er5um3hh)

2. **Sett miljøvariabler i Vercel:**

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=er5um3hh
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

3. **Sjekk at .env.local matcher:**

   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=er5um3hh
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. **Migrer data fra det andre prosjektet hvis nødvendig:**
   - Eksporter fra "buggedigital"
   - Importer til "buggedigital studio"

### Alternativ 2: Bruk forskjellige prosjekter for dev/prod

Hvis du vil ha separate prosjekter:

**Lokalt (.env.local):**

```
NEXT_PUBLIC_SANITY_PROJECT_ID=<dev-project-id>
NEXT_PUBLIC_SANITY_DATASET=development
```

**Vercel Production:**

```
NEXT_PUBLIC_SANITY_PROJECT_ID=er5um3hh
NEXT_PUBLIC_SANITY_DATASET=production
```

## Rask sjekk: Hvilket prosjekt brukes nå?

Kjør denne kommandoen for å se hva som faktisk brukes:

```bash
# Lokalt
cd buggeweb
node -e "console.log('Project ID:', process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'er5um3hh (fallback)')"
```

Eller sjekk direkte i Sanity Vision Tool:

1. Gå til Sanity Studio lokalt
2. Åpne Vision Tool (GROQ Query)
3. Kjør: `*[_type == "project"]`
4. Tell antall prosjekter og sammenlign med produksjon

## Viktig

⚠️ **Hvis Vercel ikke har miljøvariabler satt**, vil den bruke fallback-verdien `er5um3hh` fra koden.

⚠️ **Hvis du har to forskjellige project IDs**, må du:

- Enten migrere alt til ett prosjekt
- Eller sette riktige miljøvariabler i Vercel
