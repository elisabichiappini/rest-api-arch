const express = require("express");
const router = express.Router();
const prisma = require("../prisma/client");

router.post("/", storePizza);