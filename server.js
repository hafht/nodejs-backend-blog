const app = require('./src/app');
require('dotenv').config();
const config = require('./src/configs/config.mongodb');

const PORT = config.app.port || 3055;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT}`);
});

// process.on('SIGINT', () => {
//   server.close(() => {
//     console.log(`Exit Server Express`);
//   });
// });
