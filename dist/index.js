"use strict";
var crypto_1 = require("crypto");
var algorithm = 'aes-256-cbc'; //'aes192'
var cipher_iv = Buffer.alloc(16);
module.exports = {
    encrypt: function (text, password) {
        var password_hash = crypto_1.createHash('md5').update(password, 'utf8').digest('hex').toUpperCase();
        var cipher = crypto_1.createCipheriv(algorithm, password_hash, cipher_iv);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted.toString();
    },
    decrypt: function (text, password) {
        var password_hash = crypto_1.createHash('md5').update(password, 'utf8').digest('hex').toUpperCase();
        var decipher = crypto_1.createDecipheriv(algorithm, password_hash, cipher_iv);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec.toString();
    }
};
