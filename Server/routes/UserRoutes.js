const express = require('express')
const route = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/UserSchema')

// Posting login information.....
route.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Please input your Email and Password." })
        }
        const userLogin = await User.findOne({ email: email })
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)
                //token generating...
            var token = await userLogin.generateAuthToken()
            res.cookie("jwtoken", token, {
                expires : new Date(Date.now() + 1000 * 3600),
                httpOnly : true
            })
            if (isMatch) {
                res.status(200).json({ token: token })
            } else {
                res.status(400).json({ error: "Login Failed." })
            }
        } else {
            res.status(400).json({ error: "Invalid Email" })
        }

  } catch (err) {
      console.log(err)
  }
})

// Posting Register information.......
route.post("/register", async(req, res) => {
  const { name,email, password } = req.body
  if (!name || !email || !password) {
      return res.status(422).json({
          error: "Please fill all the information "
      })
  }
  try {
      const existUser = await User.findOne({ email: email });
      if (existUser) {
          return res.status(422).json({ error: "User already exist." })
      }
      const user = new User({
          name,
          email,
          password
      })
      await user.save()
      res.status(201).json({ message: "User Register Succesfull.." })
  } catch (err) {
      console.log(err)
  }

})

route.get('/auth', (req, res)=>{
    try {
        // const { token } = req.body
        const token = req.cookies.jwtoken
        console.log(token)
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
        res.status(200).json({message : "User authenticated."})
        console.log("User authenticate")
    } catch (error) {
        res.status(401).send("User not authenticated..")
        console.log(error)
    }
})


route.get('/logout', (req, res) =>{
    res.clearCookie('jwtoken')
    res.status(200).json({message : "Cookie removed."})
})
module.exports = route
