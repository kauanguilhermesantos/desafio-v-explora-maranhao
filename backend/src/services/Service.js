class Services {
  constructor(nomeModel) {
    this.model = nomeModel;
  }

  async getAll() {
    const registros = await this.model.findAll();
    return registros;
  }

  async getOne(id) {
    return await this.model.findByPk(id);
  }

  async insert(atrativoDTO) {
    await this.model.create(atrativoDTO);
  }

  async upate(id, atributte, newValue) {
    const registro = await this.model.getOne(id);
    registro[atributte] = newValue;
    await this.model.save();
  }

  async delete(id) {
    const registro = await this.model.findByPk(id);
    await registro.destroy();
  }
}

module.exports = Services;
