'use strict';

const mongoose = require('mongoose');
const { countConnect } = require('../helpers/check.connect');

const connectString = `mongodb+srv://root:VdHCrKy4QxCro3it@ecommnodejs.kp2ltnb.mongodb.net/?retryWrites=true&w=majority`;

class Database {
  constructor() {
    this.connect();
  }
  // connect
  connect(type = 'mongodb') {
    // Dev
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', { color: true });
    }
    mongoose
      .connect(connectString, { maxPoolSize: 50 })
      .then((_) => {
        console.log(`Connected MongoDb success!`, countConnect());
      })
      .catch((err) => console.log(`Error Connect!`, err));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
  }
}

const instanceMongodb = Database.getInstance();

module.exports = instanceMongodb;
