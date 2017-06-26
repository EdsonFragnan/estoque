const db = require('../../metodos/metodos.js');

module.exports.produto = (req, res, callback) => {
  const request = {
    id: req.body.id,
    nome: req.body.Nome,
    marca: req.body.marca,
    descricao: req.body.descricao,
    cadastro: req.body.cadastro,
    valor: req.body.valor,
    quantidade: req.body.quantidade
  };
  db.updateOne(request, 'estoque_produtos', function(err, data) {
    if (err) {
      return callback(req.flash('loginMessage', 'Erro na alteração.'));
    } else {
      return callback(null, req.flash('loginMessage', 'Alteração feita com sucesso.'));
    }
  });
}
