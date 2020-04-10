'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { required: true, type: String },
    display_name: { type: String },
    description: { type: String }
  });

  module.exports = mongoose.model('categories', schema);