const { Atrativo, Destino, database } = require("../models")


class AtrativoController {

  static async listarAtrativos(req, res) {
    const atrativosEcontrados = await Atrativo.findAll();
    res.status(200).json(atrativosEcontrados);
  }

  static async listarAtrativoById(req, res) {
    const { id } = req.params;
    const atrativoEncontrado = await Atrativo.findByPk(id);
    res.status(200).json(atrativoEncontrado);
  }

  static async criarAtrativo(req, res) {
    try {
      const novoAtrativo = req.body;
      await Atrativo.create({
        nome: novoAtrativo.nome,
        tipo: novoAtrativo.tipo,
        descricao: novoAtrativo.descricao,
        imagemSource: novoAtrativo.imagemSource,
        mapa: novoAtrativo.mapa,
        destinoId: novoAtrativo.destinoId
      })
      res.status(200).json({ message: "atrativo criado" });
    } catch (error) {
      res.status(500).json({ message: `erro - ${error.message}` })

    }
  }

  static async atualizarNomePorId(req, res) {
    try {
      const { id } = req.params;
      const novoNome = req.body.nome;
      const atrativoEncontrado = await Atrativo.findByPk(id);

      atrativoEncontrado.nome = novoNome;
      await Atrativo.save();

      res.status(200).json({ message: "nome atualiado" });
    } catch (error) {
      console.error(`Falha ao atualizar nome - ${error}`)
    }
  }

  static async atualizarDescricaoPorId(req, res) {
    try {
      const { id } = req.params;
      const novaDescricao = req.body.descricao;
      const atrativoEncontrado = await Atrativo.findByPk(id);

      atrativoEncontrado.descricao = novoNome;
      await Atrativo.save();

      res.status(200).json({ message: "descricao atualiado" });
    } catch (error) {
      console.error(`Falha ao atualizar nome - ${error}`)
    }
  }

  static async deletarAtrativoById(req, res) {
    try {
      const { id } = req.params;
      const atrativoEncontrado = Atrativo.findByPk(id);
      await atrativoEncontrado.destroy();
      res.status(200).json({ message: "usuario excluido com sucesso" });
    } catch (error) {
      console.error(`Falha ao excluir atrativo - ${error}`)
    }
  }

}

module.exports = AtrativoController;
