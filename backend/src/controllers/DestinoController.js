// const DestinoServices = require("../services/DestinoServices");

// const destinoServices = new (DestinoServices);
const { Destino } = require("../models");


class DestinoController {

  static async listarDestinos(req, res) {
    const destinosEcontrados = await Destino.findAll();
    res.status(200).json(destinosEcontrados);
  }

  static async listarDestinoById(req, res) {
    const { id } = req.params;
    const destinoEncontrado = await Destino.findByPk(id);
    res.status(200).json(destinoEncontrado);
  }

  static async criarDestino(req, res) {
    try {
      const novoDestino = req.body;
      await Destino.create({ nome: novoDestino.nome, descricao: novoDestino.descricao });
      res.status(200).json({ message: "destino criado" });
    } catch (error) {
      res.status(500).json({ message: `erro - ${error.message}` })

    }
  }

  static async atualizarNomePorId(req, res) {
    try {
      const { id } = req.params;
      const novoNome = req.body.nome;
      const destinoEncontrado = await Destino.findByPk(id);

      destinoEncontrado.nome = novoNome;
      await Destino.save();

      res.status(200).json({ message: "nome atualiado" });
    } catch (error) {
      console.error(`Falha ao atualizar nome - ${error}`)
    }
  }

  static async atualizarDescricaoPorId(req, res) {
    try {
      const { id } = req.params;
      const novaDescricao = req.body.descricao;
      const destinoEncontrado = await Destino.findByPk(id);

      destinoEncontrado.descricao = novoNome;
      await Destino.save();

      res.status(200).json({ message: "descricao atualiado" });
    } catch (error) {
      console.error(`Falha ao atualizar nome - ${error}`)
    }
  }

  static async deletarDestinoById(req, res) {
    try {
      const { id } = req.params;
      const destinoEncontrado = Destino.findByPk(id);
      await destinoEncontrado.destroy();
      res.status(200).json({ message: "usuario excluido com sucesso" });
    } catch (error) {
      console.error(`Falha ao excluir destino - ${error}`)
    }
  }

}

module.exports = DestinoController;
