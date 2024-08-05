
module.exports = (sequelize, DataTypes) => {

  const Destino = sequelize.define('Destino', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    imagemSource: {
      type: DataTypes.TEXT,
    }
  },
    {
      tableName: 'destinos',
      timestamps: false,
      freezeTableName: true
    },

  );

  Destino.associate = (models) => {
    Destino.belongsTo(models.Atrativo, { foreingKey: 'destinoId' });
  }

  return Destino;

}
