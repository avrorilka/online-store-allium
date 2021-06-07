const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    id_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'price',
        key: 'id'
      }
    },
    detail_img: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "default.jpg"
    },
    preview_img: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "default.jpg"
    }
  }, {
    sequelize,
    tableName: 'product',
    timestamps: true,
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
        name: "id_price",
        using: "BTREE",
        fields: [
          { name: "id_price" },
        ]
      },
    ]
  });
};
