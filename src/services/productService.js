const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.create = async (body) => {
    try {
        const categories = ["Clothes","Food","Electronics","Furniture"]
        if (!categories.includes(body.category))
            return 0;
        return await prisma.product.create({data:body})
    } catch (e){
        console.log(e);
        return 0;
    }
};