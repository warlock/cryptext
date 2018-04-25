const crypto = require('crypto')
const algorithm = 'aes192'

module.exports = {
  encrypt(text, password) {
    var cipher = crypto.createCipher(algorithm,password, 'utf8')
    var crypted = cipher.update(text,'utf8','hex')
    crypted += cipher.final('hex')
    return crypted
  },
  decrypt(text, password) {
    var decipher = crypto.createDecipher(algorithm,password)
    var dec = decipher.update(text,'hex','utf8')
    dec += decipher.final('utf8')
    return dec
  }
}

