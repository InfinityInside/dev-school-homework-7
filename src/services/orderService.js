const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.delete = async (id, next) => {
    try {
        return await prisma.order.delete({
            where: {id: +id}
        });
    } catch (err){
        console.log(err);
        return 0;
    }

};
