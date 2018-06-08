import { createCipher, createDecipher } from 'crypto'
const algorithm = 'aes192'

export default {
  encrypt(text : string, password : String) : String {
    const cipher = createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
  },
  decrypt(text : string, password : String) : String {
    const decipher = createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec
  }
}

