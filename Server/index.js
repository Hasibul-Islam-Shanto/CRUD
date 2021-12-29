//External imports.....
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

//Internals imports
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


//Database connection .......
mongoose.connect("mongodb+srv://shanto245:shanto246@crud.3elxw.mongodb.net/CRUD?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DataBase is Connected Successfully....."))
    .catch((err) => console.log("DataBase is not connnected...."))
const InfoRoute = require('./routes/InfoRoute')
app.use('/', InfoRoute);



//Server is Listening
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is Listening at http://localhost:${PORT}`)
})