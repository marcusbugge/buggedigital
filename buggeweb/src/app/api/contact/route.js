import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Validering av form data
function validateContactData(data) {
  const errors = [];

  if (!data.navn || !data.navn.trim()) {
    errors.push("Navn er påkrevd");
  }

  if (!data.email || !data.email.trim()) {
    errors.push("Email er påkrevd");
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push("Ugyldig email format");
  }

  if (!data.telefon || !data.telefon.trim()) {
    errors.push("Telefonnummer er påkrevd");
  }

  return errors;
}

// Enkel rate limiting basert på IP (kan forbedres med Redis i produksjon)
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minutt
const RATE_LIMIT_MAX_REQUESTS = 3;

function checkRateLimit(ip) {
  const now = Date.now();
  const userRequests = rateLimitMap.get(ip) || [];

  // Fjern gamle requests
  const recentRequests = userRequests.filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW
  );

  if (recentRequests.length >= RATE_LIMIT_MAX_REQUESTS) {
    return false;
  }

  recentRequests.push(now);
  rateLimitMap.set(ip, recentRequests);
  return true;
}

export async function POST(request) {
  try {
    // Rate limiting
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        {
          success: false,
          message: "For mange forespørsler. Vennligst prøv igjen senere.",
        },
        { status: 429 }
      );
    }

    // Valider at miljøvariabler er satt
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY er ikke satt");
      return NextResponse.json(
        {
          success: false,
          message: "Serverkonfigurasjon feil. Kontakt administrator.",
        },
        { status: 500 }
      );
    }

    if (!process.env.EMAIL_TO || !process.env.RESEND_FROM_EMAIL) {
      console.error("EMAIL_TO eller RESEND_FROM_EMAIL er ikke satt");
      return NextResponse.json(
        {
          success: false,
          message: "Serverkonfigurasjon feil. Kontakt administrator.",
        },
        { status: 500 }
      );
    }

    const data = await request.json();

    // Valider data
    const validationErrors = validateContactData(data);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: "Valideringsfeil",
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Sanitize input (enkelt - kan forbedres)
    const sanitizeHtml = (str) => {
      if (!str) return "";
      return str
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
    };

    // Send e-post via Resend
    const { data: emailData, error: emailError } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL,
      to: process.env.EMAIL_TO,
      reply_to: data.email,
      subject: `Ny henvendelse fra kontaktskjema: ${data.selskap || data.navn}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 30px;
                border-radius: 8px 8px 0 0;
                text-align: center;
              }
              .content {
                background: #f9f9f9;
                padding: 30px;
                border-radius: 0 0 8px 8px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background: white;
                border-radius: 4px;
                border-left: 4px solid #667eea;
              }
              .field-label {
                font-weight: bold;
                color: #667eea;
                margin-bottom: 5px;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
              }
              .field-value {
                color: #333;
                font-size: 16px;
              }
              .tags {
                display: flex;
                flex-wrap: wrap;
                gap: 8px;
                margin-top: 8px;
              }
              .tag {
                background: #667eea;
                color: white;
                padding: 6px 12px;
                border-radius: 20px;
                font-size: 14px;
              }
              .project-description {
                background: white;
                padding: 20px;
                border-radius: 4px;
                border-left: 4px solid #764ba2;
                white-space: pre-wrap;
                line-height: 1.8;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>🚀 Ny henvendelse fra kontaktskjema</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">Navn</div>
                <div class="field-value">${sanitizeHtml(data.navn)}</div>
              </div>
              
              ${data.selskap ? `
              <div class="field">
                <div class="field-label">Selskap</div>
                <div class="field-value">${sanitizeHtml(data.selskap)}</div>
              </div>
              ` : ""}
              
              <div class="field">
                <div class="field-label">E-post</div>
                <div class="field-value">
                  <a href="mailto:${sanitizeHtml(data.email)}">${sanitizeHtml(data.email)}</a>
                </div>
              </div>
              
              <div class="field">
                <div class="field-label">Telefon</div>
                <div class="field-value">
                  <a href="tel:${sanitizeHtml(data.telefon)}">${sanitizeHtml(data.telefon)}</a>
                </div>
              </div>
              
              ${data.interesser && data.interesser.length > 0 ? `
              <div class="field">
                <div class="field-label">Interessert i</div>
                <div class="tags">
                  ${data.interesser.map(tag => `<span class="tag">${sanitizeHtml(tag)}</span>`).join("")}
                </div>
              </div>
              ` : ""}
              
              ${data.prosjekt ? `
              <div class="field">
                <div class="field-label">Prosjektbeskrivelse</div>
                <div class="project-description">${sanitizeHtml(data.prosjekt)}</div>
              </div>
              ` : ""}
            </div>
          </body>
        </html>
      `,
      text: `
Ny henvendelse fra kontaktskjema

Navn: ${data.navn}
${data.selskap ? `Selskap: ${data.selskap}\n` : ""}
Email: ${data.email}
Telefon: ${data.telefon}
${data.interesser && data.interesser.length > 0 ? `Interessert i: ${data.interesser.join(", ")}\n` : ""}
${data.prosjekt ? `Prosjektbeskrivelse:\n${data.prosjekt}` : ""}
      `.trim(),
    });

    if (emailError) {
      console.error("Feil ved sending av e-post med Resend:", emailError);
      return NextResponse.json(
        {
          success: false,
          message: "Kunne ikke sende e-post. Prøv igjen senere.",
          error: process.env.NODE_ENV === "development" ? emailError.message : undefined,
        },
        { status: 500 }
      );
    }

    console.log("E-post sendt vellykket med Resend:", emailData?.id);

    return NextResponse.json(
      {
        success: true,
        message: "Takk for din henvendelse! Vi tar kontakt snart.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Generell feil på serveren:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Noe gikk galt ved behandling av forespørselen.",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}
