import User from "../models/userModel.js";


await User.sync({ force: true });

class UserController {
  static async listarUsers(req, res) {
    const listaUsuarios = await User.findAll({});
    res.status(200).json(listaUsuarios)
  }

  static async listarUsersById(req, res) {
    const userId = req.params.id;
    const userEncontrado = await User.findByPk(userId);
    res.status(200).json({ message: "usuario encontrado", user: userEncontrado instanceof User, id: userId });
  }

  static async cadastrarUser(req, res) {
    const novoUser = req.body;
    await User.create({ firstname: novoUser.firstname, lastname: novoUser.lastname, email: novoUser.email, password: novoUser.password });
    res.status(201).json({ message: "usuario cadastrado com sucesso!" });
  }
}


export default UserController;
