const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware para permitir JSON no body das requisições
app.use(express.json());

// Rota GET simples
app.get('/', (req, res) => {
    res.send('Servidor Express está rodando!');
});

// Rota POST para salvar dados em um arquivo JSON
app.post('/save', (req, res) => {
    const data = req.body;
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    res.send({ message: 'Dados salvos com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
