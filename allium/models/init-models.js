var DataTypes = require("sequelize").DataTypes;
var _backet = require("./backet");
var _backet_product = require("./backet_product");
var _category = require("./category");
var _category_product = require("./category_product");
var _category_property_n_v = require("./category_property_n_v");
var _group = require("./group");
var _order = require("./order");
var _price = require("./price");
var _product = require("./product");
var _product_category_property_n_v = require("./product_category_property_n_v");
var _product_storage = require("./product_storage");
var _property_name = require("./property_name");
var _property_name_value = require("./property_name_value");
var _property_value = require("./property_value");
var _review = require("./review");
var _status = require("./status");
var _storage = require("./storage");
var _user = require("./user");
var _user_group = require("./user_group");

function initModels(sequelize) {
  var backet = _backet(sequelize, DataTypes);
  var backet_product = _backet_product(sequelize, DataTypes);
  var category = _category(sequelize, DataTypes);
  var category_product = _category_product(sequelize, DataTypes);
  var category_property_n_v = _category_property_n_v(sequelize, DataTypes);
  var group = _group(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var price = _price(sequelize, DataTypes);
  var product = _product(sequelize, DataTypes);
  var product_category_property_n_v = _product_category_property_n_v(sequelize, DataTypes);
  var product_storage = _product_storage(sequelize, DataTypes);
  var property_name = _property_name(sequelize, DataTypes);
  var property_name_value = _property_name_value(sequelize, DataTypes);
  var property_value = _property_value(sequelize, DataTypes);
  var review = _review(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var storage = _storage(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var user_group = _user_group(sequelize, DataTypes);

  backet_product.belongsTo(backet, { as: "id_backet_backet", foreignKey: "id_backet"});
  backet.hasMany(backet_product, { as: "backet_products", foreignKey: "id_backet"});
  order.belongsTo(backet, { as: "id_backet_backet", foreignKey: "id_backet"});
  backet.hasMany(order, { as: "orders", foreignKey: "id_backet"});
  category.belongsTo(category, { as: "id_category_parent_category", foreignKey: "id_category_parent"});
  category.hasMany(category, { as: "categories", foreignKey: "id_category_parent"});
  category_product.belongsTo(category, { as: "id_category_category", foreignKey: "id_category"});
  category.hasMany(category_product, { as: "category_products", foreignKey: "id_category"});
  category_property_n_v.belongsTo(category, { as: "id_category_category", foreignKey: "id_category"});
  category.hasMany(category_property_n_v, { as: "category_property_n_vs", foreignKey: "id_category"});
  product_category_property_n_v.belongsTo(category_property_n_v, { as: "id_category_property_n_v_category_property_n_v", foreignKey: "id_category_property_n_v"});
  category_property_n_v.hasMany(product_category_property_n_v, { as: "product_category_property_n_vs", foreignKey: "id_category_property_n_v"});
  user_group.belongsTo(group, { as: "id_group_group", foreignKey: "id_group"});
  group.hasMany(user_group, { as: "user_groups", foreignKey: "id_group"});
  product.belongsTo(price, { as: "id_price_price", foreignKey: "id_price"});
  price.hasMany(product, { as: "products", foreignKey: "id_price"});
  backet_product.belongsTo(product, { as: "id_product_product", foreignKey: "id_product"});
  product.hasMany(backet_product, { as: "backet_products", foreignKey: "id_product"});
  category_product.belongsTo(product, { as: "id_product_product", foreignKey: "id_product"});
  product.hasMany(category_product, { as: "category_products", foreignKey: "id_product"});
  product_category_property_n_v.belongsTo(product, { as: "id_product_product", foreignKey: "id_product"});
  product.hasMany(product_category_property_n_v, { as: "product_category_property_n_vs", foreignKey: "id_product"});
  product_storage.belongsTo(product, { as: "id_product_product", foreignKey: "id_product"});
  product.hasMany(product_storage, { as: "product_storages", foreignKey: "id_product"});
  review.belongsTo(product, { as: "id_product_product", foreignKey: "id_product"});
  product.hasMany(review, { as: "reviews", foreignKey: "id_product"});
  property_name_value.belongsTo(property_name, { as: "id_name_property_name", foreignKey: "id_name"});
  property_name.hasMany(property_name_value, { as: "property_name_values", foreignKey: "id_name"});
  category_property_n_v.belongsTo(property_name_value, { as: "id_property_name_value_property_name_value", foreignKey: "id_property_name_value"});
  property_name_value.hasMany(category_property_n_v, { as: "category_property_n_vs", foreignKey: "id_property_name_value"});
  property_name_value.belongsTo(property_value, { as: "id_value_property_value", foreignKey: "id_value"});
  property_value.hasMany(property_name_value, { as: "property_name_values", foreignKey: "id_value"});
  order.belongsTo(status, { as: "id_status_status", foreignKey: "id_status"});
  status.hasMany(order, { as: "orders", foreignKey: "id_status"});
  product_storage.belongsTo(storage, { as: "id_storage_storage", foreignKey: "id_storage"});
  storage.hasMany(product_storage, { as: "product_storages", foreignKey: "id_storage"});
  backet.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(backet, { as: "backets", foreignKey: "id_user"});
  review.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(review, { as: "reviews", foreignKey: "id_user"});
  user_group.belongsTo(user, { as: "id_user_user", foreignKey: "id_user"});
  user.hasMany(user_group, { as: "user_groups", foreignKey: "id_user"});

  return {
    backet,
    backet_product,
    category,
    category_product,
    category_property_n_v,
    group,
    order,
    price,
    product,
    product_category_property_n_v,
    product_storage,
    property_name,
    property_name_value,
    property_value,
    review,
    status,
    storage,
    user,
    user_group,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
