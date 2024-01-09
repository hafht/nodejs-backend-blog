'use strict';

const mongoose = require('mongoose');
const os = require('os');
const process = require('process');

const _CHECK_OVERLOAD_INTERVAL = 5000;
// Count Connect
const countConnect = () => {
  const numConnection = mongoose.connections.length;
  return numConnection;
};

// Check over load
const checkOverload = () => {
  setInterval(() => {
    const numConnection = countConnect();
    const numCores = os.cpus().length;
    const memoryUsage = process.memoryUsage().rss;
    // Example maximum number of connections based on number osf cores
    const maxConnections = numCores * 5;

    console.log(`\nActive connection:: ${numConnection}`);
    console.log(`Memory usage:: ${memoryUsage / 1024 / 1024} MB\n`);

    if (numConnection >= maxConnections) {
      console.log(`Connection overload detected!`);
    }
  }, _CHECK_OVERLOAD_INTERVAL);
};

module.exports = {
  countConnect,
  checkOverload,
};
