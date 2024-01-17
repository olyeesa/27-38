const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
const router = require('./routes');

app.use('/', router);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});
app.use(express.json());

const userModel = new UserModel();

app.get('/users', usersController);

app.post('/users', createUserController);

app.put('/users/:id', updateUserController);

app.delete('/users/:id', deleteUserController);