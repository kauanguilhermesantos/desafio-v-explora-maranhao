
module.exports = (sequelize, DataTypes) => {

  const Destino = sequelize.define('Destino', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nome: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.TEXT,
    },
    imagemSource: {
      type: DataTypes.TEXT,
    }
  },
    { tableName: 'destinos' }
  );

  Destino.associate = (models) => {
    Destino.hasMany(models.Atrativo, { foreingKey: 'destinoId', as: 'destino' });
  }

  return Destino;

}
