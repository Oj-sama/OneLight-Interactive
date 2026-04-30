const nodemailer = require("nodemailer");

async function main() {
  const transporter = nodemailer.createTransport({
    host: "pro3.mail.ovh.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "admin@onelightinteractive.com",
      pass: "Y63VTqFQuMpMRuw",
    },
    logger: true,
    debug: true
  });

  try {
    const info = await transporter.sendMail({
      from: '"OneLight Interactive" <admin@onelightinteractive.com>',
      to: "admin@onelightinteractive.com",
      subject: "Test email from Node",
      text: "Hello world",
    });
    console.log("Message sent: %s", info.messageId);
  } catch (err) {
    console.error("Error sending email:", err);
  }
}

main();
