let express = require("express");
let app = express();
let mongoose = require("mongoose");
let cons = require("cors");
require("dotenv").config();
const xrouter = require("./App/routes/route");
app.use(express.json());
app.use(cons());

mongoose.connect(process.env.DataBase).then(()=>{
    console.log("Database Connected");
})

app.use("",xrouter);

app.listen(8000);