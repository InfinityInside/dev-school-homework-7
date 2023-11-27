const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.update = async (employee_id, body) => {
    try {
        return await prisma.employee.update({
            where: { id: +employee_id },
            data: body
        });
    } catch (err){
        console.log(err.message)
        return 0;
    }

};