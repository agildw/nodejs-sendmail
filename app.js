const nodeMailer = require('nodemailer');
require('dotenv').config()


// console.log(process.env.mailUser, process.env.mailPass)
async function sendMails() {

    let transporter = nodeMailer.createTransport({
        // service: 'hotmail',
        host: 'smtp-mail.outlook.com',
        port: 587,
        auth: {
            user: process.env.mail_user, //your email
            pass: process.env.mail_pass //your password
        },
        tls: {
            ciphers: 'SSLv3'
        }
    });
    let info = await transporter.sendMail({
        from: '"@me" <email@example.com>',
        to: 'email@example.com',
        subject: 'example',
        text: 'Congratulation!',
        html: '<h1>congrats!</h1>'
    })

    console.log("Message send : %s", info.messageId);

    // console.log('Preview URL : ', nodeMailer.getTestMessageUrl(info))
}

sendMails().catch(console.error);