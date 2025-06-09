import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const data = await request.json();
    console.log("Mottatt data på serveren (for Resend):", data);

    const { data: emailData, error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL, // Må være en e-post fra et verifisert domene i Resend
      to: process.env.EMAIL_TO, // Din e-postadresse som skal motta henvendelsen
      reply_to: data.email, // Setter reply-to til innsenderens e-post
      subject: `Ny henvendelse fra kontaktskjema: ${data.selskap || data.navn}`,
      html: `
        <h1>Ny henvendelse via kontaktskjema</h1>
        <p><strong>Navn:</strong> ${data.navn}</p>
        <p><strong>Selskap:</strong> ${data.selskap || "Ikke oppgitt"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefon:</strong> ${data.telefon}</p>
        <p><strong>Interessert i:</strong> ${
          data.interesser && data.interesser.length > 0
            ? data.interesser.join(", ")
            : "Ikke spesifisert"
        }</p>
        <p><strong>Prosjektbeskrivelse:</strong></p>
        <p>${data.prosjekt || "Ikke oppgitt"}</p>
      `,
    });

    if (emailError) {
      console.error("Feil ved sending av e-post med Resend:", emailError);
      return NextResponse.json(
        {
          message: "Feil ved sending av e-post.",
          error: emailError.message,
          details: emailError,
        },
        { status: 500 }
      );
    }

    console.log("E-post sendt vellykket med Resend:", emailData);

    return NextResponse.json(
      {
        message: "Melding mottatt og e-post sendt via Resend!",
        data: emailData,
      },
      { status: 200 }
    );
  } catch (error) {
    // Generell feilhåndtering (f.eks. hvis request.json() feiler)
    console.error("Generell feil på serveren:", error);
    return NextResponse.json(
      {
        message: "Noe gikk galt ved behandling av forespørselen.",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
