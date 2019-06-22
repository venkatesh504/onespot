const nodeMailer = require('../backend-services/Mailer');

module.exports = (app) => {
  console.log('Route called');
  app.post('/send-mail', nodeMailer.sendMail);
}
