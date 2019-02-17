
'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const users = require('./users');

let nextId = 6;

const app = express();

app.use(bodyParser.json());

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
    age: req.body.age,
    name: req.body.name,
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


app.listen(5000, function () {
  console.log('App listening on port 5000!');
});
