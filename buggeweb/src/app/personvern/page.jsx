import styles from "./page.module.scss";

export default function PersonvernPage() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <h1 className={styles.title}>Personvernerklæring</h1>

          <div className={styles.prose}>
            <p className={styles.lastUpdated}>
              Sist oppdatert: {new Date().toLocaleDateString("no-NO")}
            </p>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Om denne erklæringen</h2>
              <p className={styles.text}>
                Som selvstendig webutvikler tar jeg personvern på alvor. Denne
                erklæringen forklarer hvordan jeg samler inn, bruker og
                beskytter dine personopplysninger når du besøker min nettside
                eller benytter mine tjenester.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Behandlingsansvarlig</h2>
              <div className={styles.infoBox}>
                <p className={styles.text}>
                  <strong>Navn:</strong> Bugge Digital
                  <br />
                  <strong>Organisasjonsnummer:</strong> 934591836
                  <br />
                  <strong>E-post:</strong> kontakt@buggedigital.no
                  <br />
                  <strong>Telefon:</strong> +47 478 40 053
                  <br />
                  <strong>Adresse:</strong> Spør meg!
                </p>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Hvilke personopplysninger samler jeg inn?
              </h2>

              <h3 className={styles.subsectionTitle}>Via nettside</h3>
              <ul className={styles.list}>
                <li>
                  Kontaktinformasjon du oppgir frivillig (navn, e-post,
                  telefonnummer)
                </li>
                <li>Meldinger og henvendelser du sender via kontaktskjema</li>
                <li>
                  Tekniske data som IP-adresse, nettlesertype og besøkstidspunkt
                  (via cookies/analytikk)
                </li>
              </ul>

              <h3 className={styles.subsectionTitle}>I kundeforhold</h3>
              <ul className={styles.list}>
                <li>Kontaktinformasjon og faktureringsopplysninger</li>
                <li>Prosjektrelatert informasjon og kommunikasjon</li>
                <li>
                  Tilgangsinformasjon til systemer når det er nødvendig for
                  utvikling
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Hvorfor behandler jeg personopplysninger?
              </h2>
              <ul className={styles.listSpaced}>
                <li>
                  <span className={styles.strong}>
                    Kontakt og kommunikasjon:
                  </span>{" "}
                  For å svare på henvendelser og tilbud
                </li>
                <li>
                  <span className={styles.strong}>Avtaleoppfyllelse:</span> For
                  å levere utviklingstjenester og support
                </li>
                <li>
                  <span className={styles.strong}>Fakturering:</span> For å
                  håndtere betaling og regnskap
                </li>
                <li>
                  <span className={styles.strong}>Markedsføring:</span> For å
                  informere om relevante tjenester (kun med samtykke)
                </li>
                <li>
                  <span className={styles.strong}>
                    Juridiske forpliktelser:
                  </span>{" "}
                  For å oppfylle bokføringsloven og andre krav
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Behandlingsgrunnlag</h2>
              <p className={styles.text}>
                Jeg behandler personopplysninger basert på følgende juridiske
                grunnlag:
              </p>
              <ul className={styles.listSpaced}>
                <li>
                  <span className={styles.strong}>Samtykke:</span> Når du
                  frivillig oppgir informasjon via kontaktskjema
                </li>
                <li>
                  <span className={styles.strong}>Avtale:</span> For å oppfylle
                  kontrakter og leveranser
                </li>
                <li>
                  <span className={styles.strong}>Legitim interesse:</span> For
                  å drive virksomhet og forbedre tjenester
                </li>
                <li>
                  <span className={styles.strong}>Juridisk forpliktelse:</span>{" "}
                  For å oppfylle lovpålagte krav
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Deling av personopplysninger
              </h2>
              <p className={styles.text}>
                Jeg deler ikke dine personopplysninger med tredjeparter,
                unntatt:
              </p>
              <ul className={styles.listSpaced}>
                <li>
                  Når det er nødvendig for å levere tjenester (f.eks. hosting,
                  betalingsløsninger)
                </li>
                <li>Ved juridiske krav eller myndighetstilsyn</li>
                <li>Med ditt eksplisitte samtykke</li>
              </ul>

              <div className={styles.tredjepartsSection}>
                <h3 className={styles.subsectionTitle}>Tredjepartstjenester</h3>
                <p className={styles.text}>
                  Jeg kan bruke følgende tjenester som behandler
                  personopplysninger:
                </p>
                <ul className={styles.tredjepartsList}>
                  <li>Google Analytics (anonymisert analyse)</li>
                  <li>E-posttjenester for kommunikasjon</li>
                  <li>Cloud-tjenester for sikker lagring (hosting)</li>
                  <li>Faktureringsverktøy og regnskapssystem</li>
                  <li>Utviklingsverktøy og versjonskontroll</li>
                </ul>
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Lagring og sletting</h2>
              <p className={styles.text}>
                Personopplysninger lagres kun så lenge det er nødvendig for
                formålet:
              </p>
              <ul className={styles.listSpaced}>
                <li>
                  <span className={styles.strong}>Henvendelser:</span> Slettes
                  etter 2 år hvis ikke kunde-/leverandørforhold etableres
                </li>
                <li>
                  <span className={styles.strong}>Kundedata:</span> Oppbevares i
                  5 år etter avsluttet samarbeid (regnskapsloven)
                </li>
                <li>
                  <span className={styles.strong}>Prosjektfiler:</span> Slettes
                  når prosjekt er levert og garantiperiode utløpt
                </li>
                <li>
                  <span className={styles.strong}>Markedsføringsdata:</span>{" "}
                  Slettes umiddelbart ved tilbaketrekking av samtykke
                </li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Sikkerhet</h2>
              <p className={styles.text}>
                Jeg implementerer passende tekniske og organisatoriske tiltak
                for å beskytte personopplysninger mot tap, misbruk og
                uautorisert tilgang:
              </p>
              <ul className={styles.listSpaced}>
                <li>Kryptert dataoverføring (SSL/TLS)</li>
                <li>Sikre passord og tofaktor-autentisering</li>
                <li>Regelmessige sikkerhetskopier</li>
                <li>Oppdaterte systemer og programvare</li>
                <li>Begrenset tilgang på &quot;need-to-know&quot; basis</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Dine rettigheter</h2>
              <p className={styles.text}>
                Du har følgende rettigheter knyttet til dine personopplysninger:
              </p>

              <div className={styles.rightsGrid}>
                <div className={styles.rightCard}>
                  <h4 className={styles.rightTitle}>Innsyn</h4>
                  <p className={styles.rightDescription}>
                    Rett til å vite hvilke opplysninger jeg har om deg
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <h4 className={styles.rightTitle}>Retting</h4>
                  <p className={styles.rightDescription}>
                    Rett til å rette feilaktige opplysninger
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <h4 className={styles.rightTitle}>Sletting</h4>
                  <p className={styles.rightDescription}>
                    Rett til å få slettet opplysninger (&quot;retten til å bli
                    glemt&quot;)
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <h4 className={styles.rightTitle}>Portabilitet</h4>
                  <p className={styles.rightDescription}>
                    Rett til å få utlevert dine data i strukturert format
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <h4 className={styles.rightTitle}>Begrensning</h4>
                  <p className={styles.rightDescription}>
                    Rett til å begrense behandlingen i visse situasjoner
                  </p>
                </div>
                <div className={styles.rightCard}>
                  <h4 className={styles.rightTitle}>Innsigelse</h4>
                  <p className={styles.rightDescription}>
                    Rett til å protestere mot behandling basert på legitim
                    interesse
                  </p>
                </div>
              </div>

              <p className={styles.text}>
                For å utøve dine rettigheter, ta kontakt med meg på
                kontakt@buggedigital.no. Du har også rett til å klage til
                Datatilsynet hvis du mener jeg ikke overholder
                personvernregelverket.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Cookies og sporing</h2>
              <p className={styles.text}>
                Denne nettsiden bruker cookies for å forbedre brukeropplevelsen
                og analysere trafikk:
              </p>
              <ul className={styles.listSpaced}>
                <li>
                  <span className={styles.strong}>Nødvendige cookies:</span> For
                  grunnleggende sidefunksjonalitet
                </li>
                <li>
                  <span className={styles.strong}>Analytiske cookies:</span> For
                  å forstå hvordan siden brukes (anonymisert)
                </li>
                <li>
                  <span className={styles.strong}>Funksjonelle cookies:</span>{" "}
                  For å huske preferanser og innstillinger
                </li>
              </ul>
              <p className={styles.text}>
                Du kan når som helst endre cookie-innstillinger i nettleseren
                din eller kontakte meg for mer informasjon.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Endringer i personvernerklæringen
              </h2>
              <p className={styles.text}>
                Jeg kan oppdatere denne personvernerklæringen fra tid til annen.
                Vesentlige endringer vil bli kommunisert via e-post til
                eksisterende kunder og på nettsiden. Jeg anbefaler at du jevnlig
                sjekker denne siden for oppdateringer.
              </p>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>Kontakt</h2>
              <div className={styles.contactBox}>
                <p className={styles.contactText}>
                  Har du spørsmål om denne personvernerklæringen eller hvordan
                  jeg behandler dine personopplysninger? Ta gjerne kontakt:
                </p>
                <div className={styles.contactInfo}>
                  <p>
                    <span className={styles.strong}>E-post:</span>{" "}
                    kontakt@buggedigital.no
                  </p>
                  <p>
                    <span className={styles.strong}>Telefon:</span> [ditt
                    telefonnummer]
                  </p>
                  <p className={styles.smallText}>
                    Du kan også klage til{" "}
                    <span className={styles.strong}>Datatilsynet</span> hvis du
                    mener jeg ikke overholder personvernregelverket.
                    <br />
                    Datatilsynet: datatilsynet.no | Telefon: 22 39 69 00
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
