const orderService = require('../services/orderService');

exports.delete = async (req, res, next) => {
    try {
        const order = await orderService.delete(req.params.order_id);
        if (!order){
            const err = new Error();
            err.status = 404;
            err.source = 'order';
            throw err;
        }
        res.status(200).json(order);
    } catch (err){
        next(err);
    }
};