const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_category_property_n_v', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_product: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    id_category_property_n_v: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category_property_n_v',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product_category_property_n_v',
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
        name: "id_product",
        using: "BTREE",
        fields: [
          { name: "id_product" },
        ]
      },
      {
        name: "id_category_property_n_v",
        using: "BTREE",
        fields: [
          { name: "id_category_property_n_v" },
        ]
      },
    ]
  });
};
