const inicialPage = (req, res) => {
  const reqBody = req.body; // pegando o click do usuário
  res.sendFile(process.cwd() + "/index.html"); // mostrar página inicial
};

const scorePage = (req, res) => {
  const reqBody = req.body; // pegando o click do usuário
  res.sendFile(process.cwd() + "/index2.html"); // mostrando a página score
};

module.exports = {
  inicialPage,
  scorePage,
};
