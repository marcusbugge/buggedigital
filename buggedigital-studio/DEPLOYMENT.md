# Sanity Studio Deployment på Vercel

## Steg for å deploye Sanity Studio til Vercel:

### 1. Forberedelser

- Sørg for at du har en Vercel konto
- Koble GitHub repoet til Vercel

### 2. Deploy til Vercel

1. Gå til [vercel.com](https://vercel.com)
2. Klikk "New Project"
3. Velg GitHub repoet ditt
4. Velg `buggedigital-studio` som root directory
5. Vercel vil automatisk oppdage at dette er en Sanity Studio app

### 3. Miljøvariabler (hvis nødvendig)

Hvis du trenger å sette miljøvariabler:

- `SANITY_STUDIO_PROJECT_ID`: er5um3hh
- `SANITY_STUDIO_DATASET`: production

### 4. CORS-konfigurasjon

Hvis du får CORS-feil, må du legge til din Vercel URL i Sanity project settings:

1. Gå til [sanity.io/manage](https://sanity.io/manage)
2. Velg prosjektet ditt
3. Gå til "API" tab
4. Legg til din Vercel URL i "CORS Origins"

### 5. Test deployment

Etter deployment kan du aksessere studioet på:
`https://din-app.vercel.app`

## Troubleshooting

- Hvis build feiler, sjekk at alle dependencies er installert
- Hvis du får CORS-feil, sjekk CORS-konfigurasjonen i Sanity
- Hvis studioet ikke laster, sjekk at projectId og dataset er riktig
