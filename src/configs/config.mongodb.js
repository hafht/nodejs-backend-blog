require('dotenv').config();

const dev = {
  app: {
    port: process.env.DEV_APP_PORT || 3052,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: process.env.DEV_DB_PORT || 27017,
    name: process.env.DEV_DB_NAME || 'shopDEV',
    account: process.env.DEV_DB_ACCOUNT || 'root',
    password: process.env.DEV_DB_PASSWORD || '',
  },
};

const pro = {
  app: {
    port: process.env.PRO_APP_PORT || 3000,
  },
  db: {
    host: process.env.PRO_DB_HOST || 'localhost',
    port: process.env.PRO_DB_PORT || 27017,
    name: process.env.PRO_DB_NAME || 'shopPRO',
    account: process.env.PRO_DB_ACCOUNT || 'root',
    password: process.env.PRO_DB_PASSWORD || '',
  },
};

const config = { dev, pro };
const env = process.env.NODE_DEV || 'dev';

console.log(config[env], env);
module.exports = config[env];
