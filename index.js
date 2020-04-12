'use strict';

require('dotenv').config();

const server = require('./lib/server.js');

const mongoose = require('mongoose');

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  };

mongoose.connect(process.env.MONGODB_URI,options);

const port = process.env.PORT || 3000;


server.start(port);