const nodemailer = require("nodemailer");
const nodemailerConfig= require('./nodemailerConfig')
const sendEmail = async ({to,subject,html}) => {
  let testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport(nodemailerConfig);

  const info = await transporter.sendMail({
    from: '"Verify your email " <pritamgayen53@gamil.com>', // sender address
    to,
    subject,
    html,
  });
  console.log(info.messageId);
};

module.exports = sendEmail;
