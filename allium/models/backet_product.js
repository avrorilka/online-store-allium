const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('backet_product', {
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
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'backet_product',
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
        name: "id_product",
        using: "BTREE",
        fields: [
          { name: "id_product" },
        ]
      },
    ]
  });
};
