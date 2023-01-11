const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

const carControllers = require("./controllers/carsControllers");

router.get("/cars", carControllers.browse);
router.post("/cars", carControllers.add);

module.exports = router;
