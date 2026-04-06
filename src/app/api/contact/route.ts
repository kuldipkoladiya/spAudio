import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // 🔐 Transporter (use ENV in production)
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "kuldipkoladiya02@gmail.com",
                pass: "aass wdeq tsmn mssc",
            },
        });

        // 📩 Send Mail
        await transporter.sendMail({
            from: `"SP Audio" <${process.env.EMAIL_USER}>`,
            to: "kuldipkoladiya02@gmail.com",
            subject: `New Contact from ${name}`,

            html: `
      <div style="background:#f8fafc;padding:40px 0;font-family:Arial,sans-serif;">
        
        <table align="center" width="520" cellpadding="0" cellspacing="0" 
          style="background:#ffffff;border-radius:12px;border:1px solid #e5e7eb;overflow:hidden;">
          
          <tr>
            <td style="padding:20px 24px;border-bottom:1px solid #e5e7eb;">
              <h2 style="margin:0;font-size:18px;color:#111827;">SP Audio</h2>
              <p style="margin:4px 0 0;font-size:13px;color:#6b7280;">
                New Contact Message
              </p>
            </td>
          </tr>

          <tr>
            <td style="padding:24px;">
              
              <p style="font-size:14px;color:#374151;margin-bottom:20px;">
                You received a new message from your website.
              </p>

              <p style="font-size:13px;color:#6b7280;">Name</p>
              <p style="font-weight:600;color:#111827;">${name}</p>

              <p style="font-size:13px;color:#6b7280;margin-top:10px;">Email</p>
              <p style="font-weight:600;color:#111827;">${email}</p>

              <p style="font-size:13px;color:#6b7280;margin-top:10px;">Message</p>
              <div style="padding:14px;background:#f1f5f9;border-radius:8px;color:#111827;">
                ${message}
              </div>

              <div style="margin-top:20px;">
                <a href="mailto:${email}" 
                  style="display:inline-block;padding:10px 18px;background:#111827;color:#fff;
                  text-decoration:none;border-radius:6px;font-size:14px;">
                  Reply
                </a>
              </div>

            </td>
          </tr>

          <tr>
            <td style="padding:16px 24px;border-top:1px solid #e5e7eb;font-size:12px;color:#9ca3af;">
              This email was sent from your website contact form.
            </td>
          </tr>

        </table>

      </div>
      `,
        });

        return Response.json({
            success: true,
            message: "Email sent successfully",
        });

    } catch (error) {
        console.error(error);

        return Response.json({
            success: false,
            message: "Email failed",
        });
    }
}