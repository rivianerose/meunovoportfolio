const express = require('express');
const bodyParser = require('body-parser');
const { db, insertFormData } = require('./database');
const app = express();
const port = 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit', (req, res) => {
  const formData = req.body;
  insertFormData(formData, (err) => {
    if (err) {
      console.error('Erro ao inserir os dados:', err);
      res.status(500).send('Erro ao salvar os dados no banco de dados.');
    } else {
      console.log('Dados inseridos com sucesso.');
      res.send('Dados do formulário salvos com sucesso no banco de dados.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
