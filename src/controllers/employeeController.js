const employeeService = require('../services/employeeService');

exports.update = async (req, res, next) => {
    try {
        const employee = await employeeService.update(req.params.id, req.body);
        if (!employee){
            const err = new Error();
            err.status = 404;
            err.source = 'employee';
            throw err;
        }
        res.status(200).json(employee);
    } catch (err){
        next(err);
    }
};