const nodeMailer = require('../backend-services/Mailer');

module.exports = (app) => {
    app.get('/test', nodeMailer.sendMail);
}