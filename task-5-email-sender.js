const nodemailer = require('nodemailer');

const SOURCE = "abc@gmail.com" ;
const PASSWORD = "123456789" ;
const DIST = "xyz@gmail.com"

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: SOURCE,
    pass: PASSWORD,
  },
});

let mailOptions = {
  from: SOURCE,
  to: DIST,
  subject: 'Envoie de Mail',
  text: 'Bonjour, ceci est un test',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log('Error occurred: ', error);
  }
  console.log('Email sent: ' + info.response);
});