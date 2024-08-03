<<<<<<< Updated upstream
import Controller from './Controller.js';
import AtrativoServices from '../services/AtrativoServices.js'


const atrativoServices = new AtrativoServices();

export default class AtrativoController extends Controller {
  constructor() {
    super(atrativoServices);
  }
}

=======
const Atrativo = require("../models/Atrativo.js");

Atrativo.sync({ force: true });


class AtrativoController {

  static async listarAtrativos(req, res) {
    const atrativosEcontrados = await Atrativo.findAll({});
    res.status(200).json(atrativosEcontrados);
  }

  static async criarAtrativo(req, res) {
    const novoAtrativo = req.body;
    await Atrativo.create({ nome: novoAtrativo.nome, tipo: novoAtrativo.tipo });
    res.status(200).json({ message: "atrativo criado" });
  }

}

module.exports = AtrativoController;
>>>>>>> Stashed changes
