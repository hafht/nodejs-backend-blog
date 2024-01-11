'use strict';

const bcrypt = require('bcrypt');
const crypto = require('crypto');
const shopModel = require('../models/shop.model');

const RoleShop = {
  SHOP: 'SHOP',
  WRITER: 'WRITER',
  WRITER: 'WRITER',
  ADMIN: 'ADMIN',
};

class AccessService {
  static signUp = async ({ name, email, password }) => {
    try {
      // Step1: check email exists?
      console.log('signUp', name, email, password);
      const holderShop = await shopModel.findOne({ email }).lean();
      if (holderShop) {
        return {
          code: 'XXX',
          message: 'Shop already registered!',
        };
      }
      // Step2: create shop
      const passwordHash = await bcrypt.hash(password, 10);
      const newShop = await shopModel.create({
        name,
        email,
        password,
        roles: [RoleShop.SHOP],
      });

      // Step3: Create token
      if (newShop) {
        // create privateKey, publicKey
        const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
          modulusLength: 4096,
        });

        console.log({ privateKey, publicKey }); // save collection keystore
      }
    } catch (error) {
      console.log('error', error);
      return {
        code: 'DEV-MODE',
        message: error.message,
        status: 'error',
      };
    }
  };
}

module.exports = AccessService;
