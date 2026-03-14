import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_placeholder");

export async function POST(req: NextRequest) {
  try {
    const { name, hotel, rooms, phone, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Nombre y email son obligatorios" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Kontesta Hotels <contacto@cpgestudioia.tech>",
      to: "contacto@cpgestudioia.tech",
      subject: `[Kontesta Hotels] Nuevo contacto: ${hotel || name}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
          <div style="background: linear-gradient(135deg, #0d9488, #14b8a6); padding: 24px 32px;">
            <h1 style="color: white; margin: 0; font-size: 20px; font-weight: 700;">Kontesta Hotels</h1>
            <p style="color: #ccfbf1; margin: 4px 0 0; font-size: 13px;">Nuevo contacto desde la landing</p>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px; width: 140px;">Nombre</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Hotel</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${hotel || "No indicado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">N.º habitaciones</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${rooms || "No indicado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Teléfono</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;">${phone || "No indicado"}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 13px;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-size: 14px; font-weight: 500;"><a href="mailto:${email}" style="color: #0d9488; text-decoration: none;">${email}</a></td>
              </tr>
              ${message ? `
              <tr>
                <td colspan="2" style="padding: 16px 0 0;">
                  <p style="color: #64748b; font-size: 13px; margin: 0 0 8px;">Mensaje:</p>
                  <div style="background: #f8fafc; border-radius: 8px; padding: 16px; color: #334155; font-size: 14px; line-height: 1.6; border: 1px solid #e2e8f0;">${message}</div>
                </td>
              </tr>
              ` : ""}
            </table>
          </div>
          <div style="background: #f8fafc; padding: 16px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="color: #94a3b8; font-size: 11px; margin: 0;">Origen: Landing Kontesta Hotels (ES) · ${new Date().toLocaleString("es-ES", { timeZone: "Europe/Madrid" })}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 });
  }
}
