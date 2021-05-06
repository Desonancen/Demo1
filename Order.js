"use strict";
exports.__esModule = true;
var OrderStatus;
(function (OrderStatus) {
  OrderStatus[(OrderStatus["New"] = 0)] = "New";
  OrderStatus[(OrderStatus["Hold"] = 1)] = "Hold";
  OrderStatus[(OrderStatus["Sent"] = 2)] = "Sent";
  OrderStatus[(OrderStatus["Delivered"] = 3)] = "Delivered";
  OrderStatus[(OrderStatus["Closed"] = 4)] = "Closed";
})(OrderStatus || (OrderStatus = {}));
var Order = /** @class */ (function () {
  function Order(id, orderId, paymentAmount, details) {
    this.id = id;
    this.orderId = orderId;
    this.paymentAmount = paymentAmount;
    this.details = details;
  }
  return Order;
})();
