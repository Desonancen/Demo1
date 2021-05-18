var express = require("express");
var productRouter = require("./src/routes/product.router");
var orderRouter = require("./src/routes/order.router");
var adminRouter = require("./src/routes/admin.router");
var cors = require('cors');
var PORT = process.env.PORT || 8080;
var app = express();
app.use(cors());
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/login", adminRouter);
// Listen to the port
app.listen(PORT, function () { return console.log("server started on http://localhost:" + PORT); });
