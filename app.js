const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(`[ACESSO] ${req.method} em ${req.url}`);
    next();
  });

  const mostrarPagina = (nome) => (req, res) => {
    res.send(`<h1>Página: ${nome}</h1>`);
  };

app.get('/', mostrarPagina('Index'));
app.get('/signin', mostrarPagina('Sign In'));
app.get('/signup', mostrarPagina('Sign Up'));

app.post('/data', (req, res) => {
    res.send('<h1>Requisição do POST realizada em /data</h1>');
  });

  app.get('/users/:userid', (req, res) => {
    const { userid } = req.params;
    res.send(`<h1>Bem-vindo, usuário ${userid}!</h1>`);
  });
  
  app.get('/users', (req, res) => {
    res.redirect('/sign up');
  });

  app.use((req, res) => {
    res.status(404).send('<h1>Erro 404: Página não encontrada. <a href="/">Voltar</a></h1>');
  });

  app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
  });