var express = require("express");
var productRouter = require("./src/routes/product.router");
var orderRouter = require("./src/routes/order.router");
var PORT = process.env.PORT || 8080;
var app = express();
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
// Listen to the port
app.listen(PORT, function () { return console.log("server started on http://localhost:" + PORT); });
