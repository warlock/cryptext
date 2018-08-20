import { createCipher, createDecipher } from 'crypto'
const algorithm = 'aes192'

export = {
  encrypt(text : string, password : string) : string {
    const cipher = createCipher(algorithm, password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted.toString()
  },
  decrypt(text : any, password : string) : string {
    const decipher = createDecipher(algorithm, password)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec.toString()
  }
}
