const express = require("express");
const router = express();

//REGISTER
router.use("/api/users", require("./UserRoutes"))


//TEST ROUTE

router.get("/", (req,res) => {
    res.send("Rota rodando com sucesso!")
})

module.exports = router