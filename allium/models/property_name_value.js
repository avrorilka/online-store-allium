const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('property_name_value', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'property_name',
        key: 'id'
      }
    },
    id_value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'property_value',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'property_name_value',
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
        name: "id_name",
        using: "BTREE",
        fields: [
          { name: "id_name" },
        ]
      },
      {
        name: "id_value",
        using: "BTREE",
        fields: [
          { name: "id_value" },
        ]
      },
    ]
  });
};
