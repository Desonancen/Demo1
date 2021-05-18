const Router = require("express");
const router = new Router();
const orderController = require("../controllers/order.controller");
//const authMiddleware = require("../middleware/auth.middleware");

router.post("/", orderController.createOrder);
router.get("/",  orderController.getOrders);  //authMiddleware,
router.get("/:id", orderController.getOneOrder);
router.put("/", orderController.editOrder);
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
