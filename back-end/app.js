const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

// Route
const productRoute = require('./routes/product.routes');
const dealRoute = require('./routes/deal.routes');
const errorMiddleware = require("./middleware/error");

app.use('/api/v1', productRoute);
app.use('/api/v1', dealRoute);

// Middleware
app.use(errorMiddleware)

module.exports = app;