const customerService = require('../services/customerService');

exports.getOrders = async (req, res, next) => {
    try {
        const orders = await customerService.getOrders(req.params.customer_id);
        if (!orders){
            const err = new Error();
            err.status = 404;
            err.source = 'customer';
            throw err;
        }
        res.status(200).json(orders);
    } catch (err){
        next(err);
    }
};