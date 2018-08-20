import { createCipheriv, createDecipheriv, randomBytes, createHash } from 'crypto'
const algorithm = 'aes-256-cbc' //'aes192'
const cipher_iv = Buffer.alloc(16)

export = {
  encrypt(text : string, password : string) : string {
    const password_hash = createHash('md5').update(password, 'utf8').digest('hex').toUpperCase()
    const cipher = createCipheriv(algorithm, password_hash, cipher_iv)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted.toString()
  },
  decrypt(text : string, password : string) : string {
    const password_hash = createHash('md5').update(password, 'utf8').digest('hex').toUpperCase()
    const decipher = createDecipheriv(algorithm, password_hash, cipher_iv)
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8')
    return dec.toString()
  }
}
