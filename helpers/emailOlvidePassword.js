import nodemailer from 'nodemailer';

const emailOlvidePassword = async (datos) => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      const { email, nombre, token } = datos;

      
      // Enviar el Email
      const info = await transporter.sendMail({ 
          form: "APV - Administrador de Pacientes de Veterinaria",
          to: email,
          subject: 'Reestablece tu Password',
          text: 'Reestablece tu Password',
          html: `<p>Hola: ${nombre}, has solicitado reestablecer tu Password.</p>

                <p>Sigue el siguiente enlace para generar un nuevo Password:
                <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
                </p>
                <p>Si tu no creaste esta Cuenta, puedes ignorar este Email</p>
          `
      })

      console.log("Mensaje enviado: %s", info.messageId);
}

export default emailOlvidePassword;
