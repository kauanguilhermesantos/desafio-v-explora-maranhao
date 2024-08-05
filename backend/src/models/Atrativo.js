
module.exports = (sequelize, DataTypes) => {

  const Atrativo = sequelize.define("Atrativo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false
      },
      descricao: {
        type: DataTypes.TEXT,
      },
      imagemSource: {
        type: DataTypes.TEXT,
      },
      mapa: {
        type: DataTypes.TEXT,
      },
    },
    {
      tableName: 'atrativos',
      timestamps: false
    }
  );

  Atrativo.associate = (models) => {
    Atrativo.hasOne(models.Destino, { foreignKey: 'destinoId', as: 'destino' });
  }

  return Atrativo;

}


