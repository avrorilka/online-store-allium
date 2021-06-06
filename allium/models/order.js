const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_backet: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'backet',
        key: 'id'
      }
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "id_backet",
        using: "BTREE",
        fields: [
          { name: "id_backet" },
        ]
      },
      {
        name: "id_status",
        using: "BTREE",
        fields: [
          { name: "id_status" },
        ]
      },
    ]
  });
};
