import User from "../models/userModel.js";


await User.sync();

class UserController {
  static async listarUsers(req, res) {
    const listaUsuarios = await User.findAll();
    res.status(200).json(listaUsuarios)
  }

  static async cadastrarUser(req, res) {
    const novoUser = req.body;
    await User.create({ username: novoUser.username, email: novoUser.email });
    res.status(201).json({ message: "usuario cadastrado com sucesso!" });
  }
}


export default UserController;
