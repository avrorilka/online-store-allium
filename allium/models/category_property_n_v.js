const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('category_property_n_v', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_category: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'category',
        key: 'id'
      }
    },
    id_property_name_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'property_name_value',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'category_property_n_v',
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
        name: "id_category",
        using: "BTREE",
        fields: [
          { name: "id_category" },
        ]
      },
      {
        name: "id_property_name_value",
        using: "BTREE",
        fields: [
          { name: "id_property_name_value" },
        ]
      },
    ]
  });
};
