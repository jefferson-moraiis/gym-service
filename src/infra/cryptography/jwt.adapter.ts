import jwt from 'jsonwebtoken'

export class JwtAdapter{
  private readonly secret: string
  constructor () {
    this.secret = process.env.SECRET_KEY || 'keySecret'
  }

  encrypt (plaintext: any) {
    return jwt.sign(plaintext, this.secret)
  }

  decrypt (ciphertext: any) {
    return jwt.verify(ciphertext, this.secret) as any
  }

}
