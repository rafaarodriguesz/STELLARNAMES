const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
    try {
        const dbConn = await mongoose.connect(
            `mongodb+srv://rr65887:${dbPassword}@somesource.y6b65.mongodb.net/?retryWrites=true&w=majority&appName=SomeSource`
        )

        console.log("Conectou ao banco de dados!")
        return dbConn;
    } catch (error) {
        console.log(error)
    }
};

conn();

module.exports = conn