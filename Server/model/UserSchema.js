const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true
  },
  email: {
    type:String,
    required: true
  },
  password: {
    type:String,
    required:true
  },
});
//Hashing password........
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcrypt.hashSync(this.password, 12);
  }
  next();
});

// Generating token....
userSchema.methods.generateAuthToken = async function() {
    try {
        let token = jwt.sign({_id:this.id, name:this.name}, process.env.SECRET_KEY)
        return token
    } catch (err) {
        console.log(err)
    }
}

const User = new mongoose.model("User", userSchema);
module.exports = User;
