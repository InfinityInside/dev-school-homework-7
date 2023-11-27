const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getOrders = async (customer_id) => {
    const orders = await prisma.order.findMany({ where: { customer_id: +customer_id }});
    if (!orders.length) return 0;
    let total = 0;
    for (let o of orders) {
        total+=o.delivery_cost;
        const orderedProducts = await prisma.orderedProduct.findMany({ where: { order_id : o.id }});
        for (let o of orderedProducts) {
            let price = await prisma.product.findUnique({where : {id: o.product_id}, select : { price: true}});
            total+= (Object.values(price)[0]*o.amount);
        }
    }
    return {"orders": orders, "totalCost" : total};
};