const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const store = (req, res) => {
    res.status(200).send("Creazione pizza");
}

module.exports = {
    store
}