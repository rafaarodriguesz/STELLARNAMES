const express = require("express");
const router = express.Router();


//CONTROLLER
const UserController = require("../controllers/UserController");

router.post("/create", UserController.create);
router.get("/getall", UserController.getAll);
router.get("/show/:id", UserController.show);
router.put("/update/:id", UserController.update);
router.delete("/destroy/:id", UserController.destroy);


module.exports = router