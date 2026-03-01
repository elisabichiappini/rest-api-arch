const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const { PORT } = process.env;
const port = PORT || 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`SERVER ATTIVO SU http://localhost${port}`)
});