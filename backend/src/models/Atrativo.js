
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
      destinoId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'destinos',
          key: 'id'
        }
      }
    },
    {
      tableName: 'atrativos',
      timestamps: false,
      freezeTableName: true
    }
  );

  Atrativo.associate = (models) => {
    Atrativo.hasOne(models.Destino, { constraint: true, foreignKey: 'destinoId' });
  }

  return Atrativo;

}


