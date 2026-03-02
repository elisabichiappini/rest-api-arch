const express = require("express");
const router = express.Router();
const pizzaController = require("../controllers/pizzas");

router.post("/", pizzaController.store);

module.exports = router;