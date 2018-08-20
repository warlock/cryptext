import { createCipheriv, createDecipheriv } from 'crypto'
const algorithm = 'aes-256-cbc' //'aes192'
const cipher_iv = Buffer.alloc(16)
export = {
  encrypt(text : string, password : string) : string {
    const cipher = createCipheriv(algorithm, new Buffer(password), cipher_iv)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted.toString()
  },
  decrypt(text : string, password : string) : string {
    const decipher = createDecipheriv(algorithm, new Buffer(password), cipher_iv)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec.toString()
  }
}
