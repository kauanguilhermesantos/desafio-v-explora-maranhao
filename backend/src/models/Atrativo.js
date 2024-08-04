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
        type: DataTypes.STRING,
      },
      imagemSource: {
        type: DataTypes.TEXT,
      },
      mapas: {
        type: DataTypes.TEXT,
      },
    },
    { tableName: 'atrativos' }
  );

  Atrativo.associate = (models) => {
    Atrativo.belongsTo(models.Destino, { foreingKey: 'destinoId' });
  }

  return Atrativo;

}


