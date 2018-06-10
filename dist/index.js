"use strict";
var crypto_1 = require("crypto");
var algorithm = 'aes192';
module.exports = {
    encrypt: function (text, password) {
        var cipher = crypto_1.createCipher(algorithm, password);
        var crypted = cipher.update(text, 'utf8', 'hex');
        crypted += cipher.final('hex');
        return crypted;
    },
    decrypt: function (text, password) {
        var decipher = crypto_1.createDecipher(algorithm, password);
        var dec = decipher.update(text, 'hex', 'utf8');
        dec += decipher.final('utf8');
        return dec;
    }
};
