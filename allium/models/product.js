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
    id_price_discount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'price',
        key: 'id'
      }
    },
    discount_percent: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    },
    detail_img: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    preview_img: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'product',
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
        name: "id_status",
        using: "BTREE",
        fields: [
          { name: "id_status" },
        ]
      },
      {
        name: "id_price",
        using: "BTREE",
        fields: [
          { name: "id_price" },
        ]
      },
      {
        name: "id_price_discount",
        using: "BTREE",
        fields: [
          { name: "id_price_discount" },
        ]
      },
    ]
  });
};
