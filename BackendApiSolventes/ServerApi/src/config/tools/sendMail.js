var nodemailer = require('nodemailer');
//FUNCION PARA ENVIAR UN MENSAJE 
export const SendMail = async (tomail, subjectmail, mensaje, type = 'text') => {
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        secure: false,
        auth: {
            user: 'soportesolventesapp@gmail.com',
            pass: 'tqwoplumwjcoiyfd'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    var mailOptions;
    if (type === 'text') {
        mailOptions = {
            from: 'soportesolventesapp@gmail.com',
            to: tomail,
            subject: subjectmail,
            text: mensaje
        };
    } else {
        mailOptions = {
            from: 'soportesolventesapp@gmail.com',
            to: tomail,
            subject: subjectmail,
            html: mensaje
        };
    }

    const mail = await transporter.sendMail(mailOptions);
    return mail;
}