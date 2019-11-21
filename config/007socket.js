'use strict';

const { http } = require('./001app');

// Third packages.

// Config socket server.
const options = {
  pingInterval: 2000,
  pingTimeout: 2000
};
const io = require('socket.io')(http, options);

(() => {
  try {
    io.on('connect', async (socket) => {});
  } catch (e) {
    console.log(e);
  }

})();

module.exports = io;
