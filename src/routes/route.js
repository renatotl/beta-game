const express = require("express"); // trazendo expresspara route
const controllerRoute = require("../controllers/controller");// trazendo controller para ca
const route = express.Router();// executando o express e colocando dentro de route


route.get("/inicial",controllerRoute.inicialPage);// rota da página inicial
route.get("/score",controllerRoute.scorePage);// rota do score

module.exports = route