const express = require("express");
const productRouter = require("./routes/product.router");
const orderRouter = require("./routes/order.router");
const morgan = require("morgan");

const PORT = process.env.PORT || 8080;

const app = express();
// Dev logging
app.use(morgan('dev'));

app.use(express.json());
app.use("/api", productRouter);
app.use("/api", orderRouter);

//app.use(function (err, req, res, next) {
//  console.log(err.message)
 // })

// Listen to the port
app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
