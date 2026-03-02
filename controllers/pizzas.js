const prisma = require("../prisma/client");

const store = (req, res) => {
    const { name, price, available } = req.body;
    if(!name || !price || !available) {
        return res.status(400).send("Dati mancanti");
    }
    prisma.pizza.create({ 
        data: {
            name:'',
            price: '',
            available: ''
        }
     });
    res.status(200).send("Creazione pizza");
}

module.exports = {
    store,
}