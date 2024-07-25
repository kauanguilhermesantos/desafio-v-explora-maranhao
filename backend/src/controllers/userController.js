import User from "../models/userModel.js";


await User.sync({ force: true });

class UserController {
  static async listarUsers(req, res) {
    const listaUsuarios = await User.findAll({});
    res.status(200).json(listaUsuarios)
  }

  static async listarUsersById(req, res) {
    const userId = req.params.id;
    try {
      const userEncontrado = await User.findByPk(userId);
      res.status(200).json({ message: "usuario encontrado", user: userEncontrado instanceof User, id: userId });
    } catch (error) {
      res.status(500).json({message: `Falha ao encontrar usuario - ${error}`});
    }
    
  }

  static async cadastrarUser(req, res) {
    const novoUser = req.body;
    await User.create({ firstname: novoUser.firstname, lastname: novoUser.lastname, email: novoUser.email, password: novoUser.password });
    res.status(201).json({ message: "usuario cadastrado com sucesso!" });
  }

  static async atualizarUserById(req, res) {
    const userId = req.params.id;
    //const newValue = req.body.campo;
    const userEncontrado = await User.findByPk(userId);
    // atualizar
    // userEncontrado.set({campo : newValue});
    res.status(201).json({message: "credenciais de usuario atualizado com sucesso!"});
  }

  static async deleteUserById(req, res) {
    const userId = req.params.id;
    try {
      const userEncontrado = await User.findByPk(userId);
      await userEncontrado.destroy();
      res.send(200).json({message: "usuario excluido"});
    } catch (error) {
      res.send(500).json({message: "falha na exclusão de usuario"});
    }
    

   
  }
}


export default UserController;
