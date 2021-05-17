const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
require ("dotenv").config();

const secret = process.env.SECRET_KEY

const generateJwt = (email, password) => {
  return jwt.sign({ email, password }, process.env.SECRET_KEY, { expiresIn: '2h' })
}

class adminController {

  login = async (req, res) => {
    try {
    const {email, password} = req.body

    const admin = { 
      email: "nik@mail.ru",
      password: "123456"
    };

    const hashPassword = bcrypt.hashSync(admin.password, 2)

    const validEmail = await compareSync(email, admin.email)  
    if (!validEmail) {
      return res.status(400).json({ message: 'You write a wrong email' })
    }

    const validPassword = await bcrypt.compareSync(password, hashPassword) //or add this.admin.password

    if (!validPassword) {
      return res.status(400).json({ message: 'Wrong password' })
    }

    const token = await generateJwt("nik@mail.ru", "123456")

    return res.status(200).json({token, admin})
    } catch {  
    console.log(res.json({token}));
      
      //res.status(400).json({ message: 'Login error' })
    }
  }
}

module.exports = new adminController()