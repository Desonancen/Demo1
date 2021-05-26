const express = require("express");
const productRouter = require ("./src/routes/product.router");
const orderRouter = require ("./src/routes/order.router");
const adminRouter = require ("./src/routes/admin.router");
const cors = require ('cors');

const PORT = process.env.PORT || 8080;

const app = express();

app.use(cors())
app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/order", orderRouter);
app.use("/api/login", adminRouter);


// Listen to the port
     app.listen(PORT, () => console.log(`server started on http://localhost:${PORT}`));
