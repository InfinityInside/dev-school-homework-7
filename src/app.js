const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const app = express();

const customerRouter = require('./routes/customer');
const employeeRouter = require('./routes/employee');
const orderRouter = require('./routes/order');
const productRouter = require('./routes/product');

app.use(express.json());
app.use('/customers', customerRouter);
app.use('/employees', employeeRouter);
app.use('/orders', orderRouter);
app.use('/products', productRouter);

app.use(errorHandler.handleCustomerError);
app.use(errorHandler.handleEmployeeError);
app.use(errorHandler.handleOrderError);
app.use(errorHandler.handleProductError);

app.listen(4000, () => console.log('Server is running on port 4000'));



module.exports = app;


