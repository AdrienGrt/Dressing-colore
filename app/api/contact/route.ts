import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    // Validation basique
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      // Utilise ton domaine vérifié ici, sinon utilise l'adresse de test Resend
      from: 'Le Dressing Coloré <onboarding@resend.dev>',
      to: 'adrien17gardrat@gmail.com',
      subject: `[Contact] ${subject} - ${name}`,
      replyTo: email,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ffbd59, #5e93f0); padding: 20px; border-radius: 10px 10px 0 0; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #5e93f0; }
            .message-box { background: white; padding: 15px; border-radius: 8px; border-left: 4px solid #ffbd59; margin-top: 10px; }
            .footer { text-align: center; margin-top: 20px; color: #888; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✉️ Nouveau message de contact</h1>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">Nom :</span> ${name}
              </div>
              <div class="field">
                <span class="label">Email :</span> <a href="mailto:${email}">${email}</a>
              </div>
              <div class="field">
                <span class="label">Téléphone :</span> ${phone || 'Non renseigné'}
              </div>
              <div class="field">
                <span class="label">Sujet :</span> ${subject}
              </div>
              <div class="field">
                <span class="label">Message :</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
            </div>
            <div class="footer">
              <p>Email envoyé depuis le formulaire de contact du site Le Dressing Coloré</p>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error('Erreur Resend:', error);
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });

  } catch (error) {
    console.error('Erreur serveur:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}