// This file is the entry point, use it to start up all services
import fs from 'fs';
import path from 'path';
import { Socket } from 'socket.io';
import uuidv4 from 'uuidv4';

// Load .ENV file
require('dotenv').config();

// Start the express server
const express = require('express');
const app = express();
const io = require('socket.io')();

app.use(
  express.static(
    path.join(__dirname, '../', process.env.STATIC_FOLDER || 'game'),
    {
      maxAge: '72h',
    }
  )
);

const sockets = {};
const rooms = {};

function makeid() {
  let text = '';
  let possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < 5; ++i)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
