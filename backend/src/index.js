const express = require("express");
const routes = require("./routes");
const cors = require("cors");

//instanciando a aplicacao
const app = express();

//deve vim antes das rotas
app.use(cors())
app.use(express.json());
app.use(routes);
//rota
//porta
app.listen(3333);
