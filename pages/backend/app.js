const express = require('express');
const bodyParser = require('body-parser');
const { db, insertFormData } = require('./database');
// const nodemailer = require('nodemailer');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});


// // Função para enviar e-mail de resposta
// function sendEmail(name, email) {
//   const transporter = nodemailer.createTransport({
//     service: 'Outlook',
//     auth: {
//       user: 'babydeeh1@gmail.com',
//       pass: 'GATONA98211065'
//     }
//   });

//   const mailOptions = {
//     from: 'babydeeh1@gmail.com',
//     to: email,
//     subject: 'Obrigado por enviar o formulário',
//     text: `Olá ${name},\n\nObrigado por enviar o formulário. Recebemos seus dados com sucesso.\n\nAtenciosamente,\nSua Equipe`
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Erro ao enviar o e-mail:', error);
//     } else {
//       console.log('E-mail enviado:', info.response);
//     }
//   });
// }


app.post('/submit', (req, res) => {
  const formData = req.body;


  const dataWithMesage = {
    name: formData.name,
    email: formData.email,
    field3: formData.message // Certifique-se de que o campo3 no objeto corresponda ao nome no formulário HTML
  };
  insertFormData(formData, (err) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).send('Erro ao salvar os dados no banco de dados.');
    } else {
      console.log('Dados inseridos com sucesso.');
      res.send('Dados do formulário salvos com sucesso no banco de dados.');

       // Enviar e-mail de resposta
      //  sendEmail(formData.name, formData.email);

      //  res.send('Dados do formulário salvos com sucesso no banco de dados.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
