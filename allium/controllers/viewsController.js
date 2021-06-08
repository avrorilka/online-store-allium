const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sequelize = require("../db.js");
const { Op } = require("sequelize");
const category_product = require('../models/category_product');
const price = require('../models/price');
const Category = sequelize.models.category;
const Product = sequelize.models.product;
const Price = sequelize.models.price;
const CatProduct = sequelize.models.category_product;

exports.getOverview = catchAsync(async (req, res, next) => {
  let products = await Product.findAll({
    include: [{
      model: Price,
      as: 'id_price_price',
    }],
    limit: 4,
    order: [['createdAt', 'DESC']]
  });

  res.status(200).render('index', {
    title: 'Головна',
    products
  });
});

exports.getTotalAmount = catchAsync(async (req, res, next) => {
  sequelize
    .query('CALL GetProductsAmount();')
    .then(result => {
      res.status(200).render('getTotalAmount', {
        title: 'Головна',
        result
      });
    });
});

exports.getOrderAmount = catchAsync(async (req, res, next) => {
  sequelize
    .query('CALL GetOrderProductAmount();')
    .then(result => {
      res.status(200).render('getTotalAmount', {
        title: 'Головна',
        result
      });
    });
});

exports.getCatalog = catchAsync(async (req, res, next) => {
  Product.belongsToMany(Category, { through: CatProduct,
    foreignKey: "id_product", 
  });
  Category.belongsToMany(Product, { 
    through: CatProduct,
    foreignKey: "id_category" 
  });

  let products;

  if(!req.query.cat){
    products = await Product.findAll({
      include: [{
        model: Price,
        as: 'id_price_price'
      }]
    });
  }

  else {
    products = await Product.findAll({
      include: [{
        model: Category,
        where: {
            id: req.query.cat,
        },
      },{
        model: Price,
        as: 'id_price_price'
      }]
    });
  }

  const categories = await Category.findAll();
  res.status(200).render('catalog', {
    title: 'Товари',
    products,
    categories
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findOne({
    where: {
      id: req.params.id
    },
    include: [{
      model: Price,
      as: 'id_price_price'
    }]
  });

  if (!product) {
    return next(new AppError('There is no product with that name.', 404));
  }

  res.status(200).render('product', {
    title: `${product.name}`,
    product
  });
});




