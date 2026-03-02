const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const store = (req, res) => {
    const { name, price, available } = req.body;
    if(!name || isNaN(price)) {
        return res.status(400).send("Dati mancanti");
    }
    prisma.pizza.create({ 
        data: {
            name:'',
            price: '',
            available: req.body.available ? true : false,
        }
     });
    res.status(200).send("Creazione pizza");
}

module.exports = {
    store,
}