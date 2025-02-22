const brevo = require("@getbrevo/brevo");
const dotenv= require("dotenv");
dotenv.config();


const apiInstance = new brevo.TransactionalEmailsApi();
apiInstance.setApiKey(
  brevo.TransactionalEmailsApiApiKeys.apiKey,
  process.env.API_KEY_BREVO  
);

const mainSender = async ({ correoElectronico, nombreEvento, nombreCompleto }) => {
  try {
    const sendSmtpEmail = new brevo.SendSmtpEmail();

    // Extraer la fecha del nombreEvento
    const fechaExtraida = nombreEvento.split(" - ")[0]; // Toma solo "25 MAY"
    const anioActual = new Date().getFullYear(); // Obtiene el año actual dinámicamente

    sendSmtpEmail.subject = "Inscripción Nueva";
    sendSmtpEmail.to = [
      { email: correoElectronico, name: nombreCompleto },
    ];
    sendSmtpEmail.htmlContent = `
<html>
  <body style="font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f4; padding: 40px;">
    <div style="max-width: 600px; background: #fff; padding: 30px; border-radius: 10px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); margin: auto;">
      <h1 style="color: #27ae60; margin-bottom: 20px;">¡Inscripción Confirmada!</h1>
      <p style="font-size: 16px; color: #333;">Hola <strong>${nombreCompleto}</strong>,</p>
      <p style="font-size: 16px; color: #333;">Gracias por inscribirte en nuestro evento de <strong>${nombreEvento}</strong>.</p>

      <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; margin: 20px 0;">
        <h3 style="color: #27ae60; margin-bottom: 10px;">Detalles del evento:</h3>
        <ul style="list-style: none; padding: 0; margin: 0; font-size: 16px; color: #555;">
          <li><strong>📅 Fecha:</strong> ${fechaExtraida} ${anioActual}</li>
          <li><strong>⏰ Hora:</strong> 6:00 AM</li>
          <li><strong>📍 Ubicación:</strong> Pachacámac, Lima</li>
        </ul>
      </div>

      <p style="font-size: 16px; color: #333;">Prepárate para una gran aventura y recuerda llevar tu equipo de seguridad.</p>

      <p style="font-size: 14px; color: #777; margin-top: 20px;">Si tienes alguna consulta, escríbenos al WhatsApp <span style="color: #27ae60; text-decoration: none; font-weight: bold;">+51 959920571</span></p>
    </div>
  </body>
</html>
`;

    sendSmtpEmail.sender = {
      name: "Rimm Challenge Perú",
      email: "rimmchallenge.inscripciones@gmail.com",
    };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log(result);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = {
  mainSender,
};
