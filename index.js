require('dotenv').config();
const express = require('express');
const helmet = require('helmet');

const auth = require('./routes/auth');
const users = require('./routes/users');

const App = express();

App.use(helmet());
App.use(express.json());

App.use('/auth', auth)
App.use('/users', users)


App.listen(3000, () => {
    console.log('Super secure server is up n running!')
})