/* import brevo from "@getbrevo/brevo";

const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  "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"
);

export default async function mainSender() {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    sendSmtpEmail.subject = "Inscripcion Nueva";
    sendSmtpEmail.to = [
      { email: "leonardoinwork302001@gmail.com", name: "l.arrieta Paino" },
      //{ email: "gaboa9@gmail.com", name: "Gabriel Arrieta" },
      { email: "milapecerosww@gmail.com", name: "Milagros Peceros" },
    ];
    sendSmtpEmail.htmlContent = `
<html>
  <body style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; padding: 20px;">
    <h1 style="color: #27ae60;">¡Inscripción Confirmada!</h1>
    <p>Hola <strong>{{nombre}}</strong>,</p>
    <p>Gracias por inscribirte en nuestro evento de <strong>Ciclismo en Pachacámac</strong>.</p>
    <p><strong>Detalles del evento:</strong></p>
    <ul style="list-style: none; padding: 0;">
      <li><strong>Fecha:</strong> {{fecha}}</li>
      <li><strong>Hora:</strong> {{hora}}</li>
      <li><strong>Ubicación:</strong> Pachacámac, Lima</li>
    </ul>
    <p>Prepárate para una gran aventura y recuerda llevar tu equipo de seguridad.</p>
    <a href="{{link}}" style="display: inline-block; padding: 10px 20px; background-color: #27ae60; color: #fff; text-decoration: none; border-radius: 5px; margin-top: 10px;">Ver Más Detalles</a>
    <p style="color: #777;">Si tienes alguna consulta, contáctanos en <a href="mailto:info@eventociclismo.com">info@eventociclismo.com</a></p>
  </body>
</html>
`;

    sendSmtpEmail.sender = {
      name: "Leonardo Arrieta",
      email: "leoah302003@gmail.com",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);

    console.log(result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

  */