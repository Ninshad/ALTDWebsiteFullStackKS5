const { emailSender } = require('@keystonejs/email');

const jsxEmailSender = emailSender.jsx({
  // The directory containing the email templates
  root: `${__dirname}/emails`,
  // The transport to send the emails (see `keystone-email` docs)
  transport: 'mailgun'
});

await jsxEmailSender('new-user.jsx').send(
  {  }, // renderer props
  { apiKey: 'ef80054a-18a273dc',
  domain: 'sandbox4c4bf0e0399b4d458075c3faf448e76a.mailgun.org',
  to: 'ninshad.m@altd.in',
  from: {
    name: 'Your Site',
    email: 'hello@yoursite.com',
  },
  subject: 'Your first KeystoneJS email', 
  }, // transport options (api keys, to/from, etc). See `keystone-email` docs
   function (err, result) {
    if (err) {
      console.log('🤕 Mailgun test failed with error:\n', err);
    } else {
      console.log('📬 Successfully sent Mailgun test with result:\n', result);
    }
  }
);