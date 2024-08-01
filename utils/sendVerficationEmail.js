const sendEmail = require("./sendEmail");

const sendVeficationEmail = async ({
  name,
  email,
  verificationToken,
  origin,
}) => {
const verifyEmail =`${origin}user/verify-email/?token=${verificationToken}&email=${email}`

  const message = `<p>Please confirm your email by clicking this link : <a href="${verifyEmail}" >Verify Email </a></p>`;
  return sendEmail({
    to: email,
    subject: "Email confermation",
    html: `<h4>hello, ${name} 
     ${message}
    </h4>`,
    to: email,
    subject: "Email confermation",
    html: `<h4>hello, ${name} 
     ${message}
    </h4>`,
  });
};

module.exports = sendVeficationEmail;