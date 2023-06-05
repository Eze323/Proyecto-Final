const { Router } = require("express");
const OrderRouter = Router();
const {
  getOrderHandlers,
  postOrderHandlers,
  paymentHandler,
  createOrderHandler,
  getLastOrderFromUserHandler,
  updateOrderHandler,
} = require("../handlers/OrderHandlers.js");
const { processPayment } = require("../controllers/OrderControllers.js");

OrderRouter.get("/:userId", getOrderHandlers);
OrderRouter.post("/:userId", postOrderHandlers);
OrderRouter.post("/checkout/create-checkout-session", paymentHandler);
OrderRouter.post("/order/:userId", createOrderHandler);
OrderRouter.put("/order/:orderId", updateOrderHandler);
OrderRouter.get("/order/:userId", getLastOrderFromUserHandler);
module.exports = OrderRouter;
