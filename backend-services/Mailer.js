const path = require('path');
var nodemailer = require('nodemailer');
var NodeMailer = module.exports;
NodeMailer.sendMail = function(_apiRequest, _apiResponse) {
    var smtpConfig = {
        service: 'Gmail',
        auth: {
            user: 'venkatesh.y@way2online.co.in',
            pass: 'v7207455147'
        }
     };
     // create reusable transporter object using the default SMTP transport
     var transporter = nodemailer.createTransport(smtpConfig);
     
     // setup e-mail data with unicode symbols
     var mailOptions = {
      from: '"OneSpot Support" <suresh.s@way2online.co.in>', // sender address
      to: 'venkatesh.y@way2online.co.in, suresh.s@way2online.co.in', // list of receivers
      subject: 'Thank you for contacting us', // Subject line
      text: 'ONESPOT WELCOMES YOU', // plaintext body
      html: '' // html body
     };
     
     // send mail with defined transport object
     transporter.sendMail(mailOptions, function(error, info){
      if(error){
          return console.log(error);
      }
      console.log('Message sent: ' + info.response);
     });
     
}

