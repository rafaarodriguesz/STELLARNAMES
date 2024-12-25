const mongoose = require("mongoose");
const  Schema  = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    msg: String,
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
