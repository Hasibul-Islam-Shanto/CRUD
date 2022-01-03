//External imports.....
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const cookieParser = require("cookie-parser");

//Internals imports
app.use(cookieParser());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin : true,
    credentials: true,
}
));
require('dotenv').config()

//Database connection .......
mongoose.connect(process.env.DATABASE_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("DataBase is Connected Successfully....."))
    .catch((err) => console.log("DataBase is not connnected...."))

const InfoRoute = require('./routes/InfoRoute')
const useRoute = require('./routes/UserRoutes')
app.use('/', InfoRoute);
app.use('/user',useRoute)



//Server is Listening
const PORT = 8000
app.listen(PORT, () => {
    console.log(`Server is Listening at http://localhost:${PORT}`)
})