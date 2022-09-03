const express = require("express"); // trazendo o express
const route = require("./src/routes/route"); //acessando as rotas
const app = express(); // passando o express para dentro do app
const cors = require("cors"); // trazendo o cors para nossa variável cors
const path = require("path"); //importando uma lib do proprio express chamada path  essencial link o frontend com o backend
const port = 3000; // declarando nossa porta
app.use(express.static(path.join(__dirname, "public"))); //dizendo ao express a pasta que irá guardar esses arquivos   ecencial  express estatico path se junta
// O EXPRESS eu guardei todos os arquivos em public por isso não precisou ../ na hora de linkar
app.use(cors()); // ativando o cors
app.use("/games", route); // rota principal

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`); // mostrando na tela nosso servidor rodando
});
