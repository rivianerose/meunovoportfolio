const sqlite3 = require('sqlite3').verbose();

// Abre ou cria o banco de dados
const db = new sqlite3.Database('formulariosdois.db');

// Cria a tabela se ela não existir
db.run(`
  CREATE TABLE IF NOT EXISTS formulario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    campo1 TEXT,
    campo2 TEXT
  )
`);

// Função para inserir dados
function insertFormData(data, callback) {
  const sql = 'INSERT INTO formulario (campo1, campo2) VALUES (?, ?)';
  db.run(sql, [data.name, data.email], callback);
}

module.exports = { db, insertFormData };
