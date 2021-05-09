var express = require("express");
var productRouter = require("./routes/product.router");
var orderRouter = require("./routes/order.router");
var morgan = require("morgan");
var PORT = process.env.PORT || 8080;
var app = express();
// Dev logging
app.use(morgan('dev'));
app.use(express.json());
app.use("/api", productRouter);
app.use("/api", orderRouter);
app.use(function (err, req, res, next) {
    console.log(err.message);
});
// Listen to the port
app.listen(PORT, function () { return console.log("server started on http://localhost:" + PORT); });
