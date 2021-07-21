const router = require("express").Router();
const itemRoutes = require("./items");

// Post routes
router.use("/items", itemRoutes);

module.exports = router;