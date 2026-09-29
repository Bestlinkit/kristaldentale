import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, treatment, preferredDate, preferredTime, message } = body;

    if (!fullName || !phone) {
      return NextResponse.json(
        { error: "Full name and phone number are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_EMAIL || "admin@kristaldentaleclinic.com.ng";
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Kristal Dentale Clinic <info@kristaldentaleclinic.com.ng>";

    // If Resend API key is configured, send actual email
    if (apiKey) {
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: fromEmail,
        to: [recipientEmail],
        replyTo: recipientEmail,
        subject: `New Dental Appointment Request: ${fullName} - ${treatment}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e8edf3; border-radius: 12px; background-color: #ffffff;">
            <div style="border-bottom: 2px solid #E83A9B; padding-bottom: 12px; margin-bottom: 20px;">
              <h2 style="color: #07152F; margin: 0;">Kristal Dentale Clinic</h2>
              <p style="color: #E83A9B; font-weight: bold; margin: 4px 0 0 0; font-size: 13px;">NEW APPOINTMENT INQUIRY</p>
            </div>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px; width: 140px;"><strong>Patient Name:</strong></td>
                <td style="padding: 8px 0; color: #07152F; font-size: 15px; font-weight: bold;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Phone Number:</strong></td>
                <td style="padding: 8px 0; color: #07152F; font-size: 15px; font-weight: bold;">
                  <a href="tel:${phone}" style="color: #1765A8; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Desired Treatment:</strong></td>
                <td style="padding: 8px 0; color: #E83A9B; font-size: 15px; font-weight: bold;">${treatment}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Preferred Date:</strong></td>
                <td style="padding: 8px 0; color: #07152F; font-size: 14px;">${preferredDate || "Earliest Available"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748B; font-size: 14px;"><strong>Preferred Time:</strong></td>
                <td style="padding: 8px 0; color: #07152F; font-size: 14px;">${preferredTime || "Flexible"}</td>
              </tr>
              ${
                message
                  ? `<tr>
                      <td style="padding: 8px 0; color: #64748B; font-size: 14px; vertical-align: top;"><strong>Notes / Message:</strong></td>
                      <td style="padding: 8px 0; color: #07152F; font-size: 14px; line-height: 1.5;">${message}</td>
                    </tr>`
                  : ""
              }
            </table>

            <div style="border-top: 1px solid #e8edf3; padding-top: 14px; font-size: 12px; color: #64748B;">
              <p style="margin: 0;">Kristal Dentale Clinic &bull; 116 Idanre Road, Beside Idanre Garage, Oke Aro, Akure, Ondo State.</p>
              <p style="margin: 4px 0 0 0;">Direct WhatsApp: +234 813 428 0545</p>
            </div>
          </div>
        `,
      });

      return NextResponse.json({ success: true, message: "Appointment inquiry delivered successfully." });
    } else {
      // In local dev or before RESEND_API_KEY is placed in Vercel environment variables:
      console.log("Resend API key not configured. Inquiry data:", body);
      return NextResponse.json({
        success: true,
        message: "Inquiry registered. (Add RESEND_API_KEY in Vercel to dispatch live emails)",
      });
    }
  } catch (error: any) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: error?.message || "Failed to process appointment request." },
      { status: 500 }
    );
  }
}
