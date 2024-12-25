//MODEL
const UserModel = require("../models/User.js");

//FUNCTIONS

class UserController {

    async create(req, res) {
        const createUser = await UserModel.create(req.body);

        return res.status(200).json(createUser)
    }

    async getAll(req, res) {
        const users = await UserModel.find();

        return res.status(200).json(users)
    }

    async show(req, res) {
        const {id} = req.params;

        const user = await UserModel.findById(id);

        if(!user){
            return res.status(404).json({message: "Usuario nao encontrado"})
        }

        return res.status(200).json(user);
    }

    async update(req, res) {
        const {id} = req.params

        await UserModel.findByIdAndUpdate(id, req.body)

        return res.status(200).json({message: "project updated"})
     }

    async destroy(req, res) {
        const {id} = req.params

        const productDeleted = await UserModel.findByIdAndDelete(id);

        return res.status(200).json({message: "product deleted"})

    }

}


module.exports = new UserController();

