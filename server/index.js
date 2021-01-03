// This file is the entry point, use it to start up all services
const PORT = 7070;
const sockets = {};
// NOTE: Look into migrating this to some sort of database rather than in-memory.
const rooms = {};

// import uuidv4 from 'uuidv4';

// Start the express server
const express = require('express');
const app = express();
const server = require('http').createServer(app);

// Init the io server
const io = require('socket.io')(server);

// HELPERS
function makeid() {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; ++i)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function init() {
  io.on('connection', (socket) => {
    // either with send()
    socket.send('Hello!');

    // or with emit() and custom event names
    socket.emit('greetings', 'Hey!', { ms: 'jane' }, Buffer.from([4, 3, 3, 1]));

    // handle the event sent with socket.send()
    socket.on('message', (data) => {
      console.log(data);
    });

    // handle the event sent with socket.emit()
    socket.on('salutations', (elem1, elem2, elem3) => {
      console.log(elem1, elem2, elem3);
    });
  });

  server.listen(PORT, () => {
    console.log(`Server successfully listening on port ${PORT}`);
  });
}

init();
