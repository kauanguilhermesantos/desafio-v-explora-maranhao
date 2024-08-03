<<<<<<< Updated upstream
import Controller from './Controller.js';
import UserService from '../services/UserService.js'


const userServices = new UserService();

export default class UserController extends Controller {
  constructor() {
    super(userServices);
  }
}

=======
// import User from "../models/UserModel.js";
const User = require("../models/User");


User.sync();

class UserController {
  static async listarUsers(req, res) {
    const listaUsuarios = await User.findAll({});
    res.status(200).json(listaUsuarios);
  }

  static async listarUsersById(req, res) {
    try {
      const userId = req.params.id;
      const userEncontrado = await User.findByPk(userId);

      if (userEncontrado != null) {
        res.status(200).json(userEncontrado);
      } else {
        res.status(404).json({ message: "user not found" });
      }
    } catch (error) {
      console.error(`Falha ao listar usuario - ${error}`)

    }
  }

  static async cadastrarUser(req, res) {
    try {
      const novoUser = req.body;
      await User.create({ name: novoUser.name, email: novoUser.email, password: novoUser.password });
      res.status(200).json({ message: "usuario cadastrado com sucesso!" });

    } catch (error) {
      console.error(`Falha ao cadastrar usuario - ${error}`)
    }
  }

  static async atualizarUserNameById(req, res) {
    try {
      const userId = req.params.id;
      const novoNome = req.body.name;
      const userEncontrado = await User.findByPk(userId);

      if (userEncontrado != null) {
        userEncontrado.name = novoNome;
        await userEncontrado.save();
        res.status(200).json({ message: "nome atualiado" });
      } else {
        res.status(404).json({ message: "user not found" });
      }


    } catch (error) {
      console.error(`Falha ao atualizar nome de usuario - ${error}`)
    }
  }

  static async deletarUserById(req, res) {
    try {
      const userId = req.params.id;
      const userEncontrado = await User.findByPk(userId);

      if (userEncontrado != null) {
        await userEncontrado.destroy();
        res.status(200).json({ message: "usuario excluido com sucesso" });
      } else {
        res.status(404).json({ message: "user not found" });
      }


    } catch (error) {
      console.error(`Falha ao excluir usuario - ${error}`)

    }
  }
}

module.exports = UserController;
>>>>>>> Stashed changes
