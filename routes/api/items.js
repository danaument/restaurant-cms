const router = require("express").Router();
const itemsController = require("../../controllers/itemsController");

// Matches with "/api/posts"
router
  .route("/")
  .get(itemsController.findAll)
  .post(itemsController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(itemsController.findById)
  .put(itemsController.update)
  .delete(itemsController.remove);

router
  .route("/default/")
  .get(itemsController.default);

module.exports = router;