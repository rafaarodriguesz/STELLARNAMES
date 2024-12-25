//DOTENV
require("dotenv").config();

//MONGODB
require("./config/db.js")

//DEPENDENCIAS
const express = require("express");
const path = require("path");
const cors = require("cors");

//ROUTER
const router = require("./routes/router");

//APP
const app = express();

//PORT
const port = process.env.PORT

//CONFIG JSON APP
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);



//PORT
app.listen(port, () => {
    console.log(`Rodando na porta ${port}`);
});