exports.handleCustomerError = function (err, req, res, next) {
    if (err.status === 404 && err.source === 'customer') {
        res.status(404).send('Customer with such id not found');
    } else {
        next(err);
    }
};

exports.handleEmployeeError = function (err, req, res, next) {
    if (err.status === 404 && err.source === 'employee') {
        res.status(404).send('Employee with such id not found');
    } else {
        next(err);
    }
};

exports.handleOrderError = function (err, req, res, next) {
    if (err.status === 404 && err.source === 'order') {
        res.status(404).send('Order with such id not found');
    } else {
        next(err);
    }
};

exports.handleProductError = function (err, req, res, next) {
    if (err.status === 403 && err.source === 'product') {
        res.status(403).send('Invalid product category');
    } else {
        next(err);
    }
};