'use strict';

require('dotenv').config();
const express = require('express');
const path = require('path');

const { Env } = require('./index');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));
const http = require('http').Server(app);

http.listen(Env.PORT, () => {
  console.log('server run port: '+ Env.PORT);
});

module.exports = {
  http,
  app
};
