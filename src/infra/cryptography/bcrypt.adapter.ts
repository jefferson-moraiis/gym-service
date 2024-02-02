import bcrypt from 'bcrypt'

export class BcryptAdapter {
  private readonly salt: string
  constructor () { 
    this.salt = bcrypt.genSaltSync(10)
  }

  async hash (plaintext: string): Promise<string>{
    return bcrypt.hash(plaintext, this.salt)
  }

  async compare (plaintext: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plaintext, digest)
  }
}
