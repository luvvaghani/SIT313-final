const express = require('express');
const app = express();

const bodyParser = require('body-parser');



const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.json())


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});


app.post('/', (req, res) => {
  const email = req.body.email;
  const message = {
    to: "vaghaniluv@gmail.com",
    from: 'lmvaghani@gmail.com',
    subject: 'deakin university welcome email',
    text: 'Test SENDGRID',
    html: '<strong>This is an automated email from dev DEAKIN.</strong>',
  };

  require('dotenv').config();
  console.log(process.env.SENDGRID_API_KEY);
  const sendGridMail = require('@sendgrid/mail');
  sendGridMail.setApiKey(process.env.SENDGRID_API_KEY);

  sendGridMail.send(message).then(() => {
    console.log('Email was sent successfully');
  });

  res.send("'Email was sent successfully'");

  console.log(email);
});

app.listen(3000, function (request, response) {
  console.log('server is running');
});