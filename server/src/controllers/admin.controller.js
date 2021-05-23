const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
require ("dotenv").config();

const generateJwt = (email, password) => {
  return jwt.sign({ email, password }, "process.env.SECRET_KEY", { expiresIn: '2h' })
}

class adminController {

  login = async (req, res) => {
    try {
    const {email, password} = req.body

    const admin = { 
      email: process.env.ADMIN_MAIL,
      password: process.env.ADMIN_PASSWORD
    };

    const hashPassword = bcrypt.hashSync(admin.password, 2)
    
    if (email !== admin.email ) {
      return res.status(400).json({ message: 'You write a wrong email' })
    }
    const validPassword = await bcrypt.compareSync(password, hashPassword) //or add this.admin.password

    if (!validPassword) {
      return res.status(400).json({ message: 'Wrong password' })
    }
    
    const token = await generateJwt(admin.email, admin.password)

    return res.status(200).json({token, admin})
  } catch {  
      console.log(res.json({token}));
      
      res.status(400).json({ message: 'Login error' })
    }
  }
}

module.exports = new adminController()