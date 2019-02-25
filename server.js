'use strict';

const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const users = require('./api/users');

const app = express();

let nextId = 6;

app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

// получить все записи
app.get('/api/records', (req, res) => {
  res.send(users);
});

// создать новую запись
app.post('/api/records', (req, res) => {
  let user = {
    id: nextId++,
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  };

  users.push(user);

  res.send(user);
});

// обновить запись по id
app.put('/api/records/:id', (req, res) => {
    let user = users.find(user => user.id == req.params.id);

    if (!user) return res.sendStatus(404);

    user.age = req.body.age || user.age;
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;

    res.json(user);
});

// удалить запись по id
app.delete('/api/records/:id', (req, res) => {
  let index = users.findIndex(user => user.id == req.params.id);

  if (index === -1) return res.sendStatus(404);

  users.splice(index, 1);

  res.sendStatus(204);
});

//
app.get('*', (req, res) => {
  fs.readFile(`${__dirname}/public/index.html`, (error, html) => {
      if (error) throw error;

      res.setHeader('Content-Type', 'text/html');
      res.end(html);
  });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));
