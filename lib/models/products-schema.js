'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    category: { required: true, type: String },
    name: { required: true, type: String },
    display_name: { type: String },
    description: { type: String }
  });

  module.exports = mongoose.model('products', schema);