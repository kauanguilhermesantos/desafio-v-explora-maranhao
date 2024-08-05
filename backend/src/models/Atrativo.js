const Destino = require("./Destino");

module.exports = (sequelize, DataTypes) => {

  const Atrativo = sequelize.define("Atrativo",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      // destinoId: {
      //   type: DataTypes.INTEGER,
      // references: {
      //   model: 'Destino',
      //   key: 'id'
      // }
      // }
    },
    {
      tableName: 'atrativos',
      timestamps: false,
      freezeTableName: true
    }
  );

  Atrativo.associate = (models) => {
    Atrativo.belongsTo(models.Destino);
    models.Destino.hasMany(Atrativo);

  }

  return Atrativo;

}


