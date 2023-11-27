const productService = require('../services/productService');

exports.create = async (req, res, next) => {
    try {
        const product = await productService.create(req.body);
        if (!product){
            const err = new Error();
            err.status = 403;
            err.source = 'product';
            throw err;
        }
        res.status(201).json(product);
    } catch (err){
        next(err);
    }
};