import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const secret = process.env.SECRET_KEY!

const generateJwt = (email: string, password: string) => {
  return jwt.sign({ email, password }, secret, { expiresIn: '2h' })
}

class UserController {

    admin = { 
        email: 'nik@mail.ru',
        password: '123456'
    };

    //hashPassword = bcrypt.hashSync(this.admin.password, 3)

  login = async (req: Request, res: Response) => {
      try {
    const {email, password} = req.body
          

    if (email === !this.admin.email) {
      return res.status(404).json({ message: 'You write a wrong email' })
    }

    const validPassword = await bcrypt.compareSync(password, this.admin.password) //or add this.admin.password

    if (!validPassword) {
      return res.status(400).json({ message: 'Wrong password or email' })
    }

    const token = generateJwt(email, password)
    return res.status(200).json({ token })
    } catch {  
        res.status(400).json({ message: 'Login error' })
    }
  }
}

export default new UserController()