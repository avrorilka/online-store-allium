const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sequelize = require("../db.js");
const { Op } = require("sequelize");
const category_product = require('../models/category_product');
const Category = sequelize.models.category;
const Product = sequelize.models.product;
const Price = sequelize.models.price;
const CatProduct = sequelize.models.category_product

exports.getOverview = catchAsync(async (req, res, next) => {
  const categories = await Category.findAll();

  res.status(200).render('index', {
    title: 'Головна',
    categories,
  });
});

exports.getProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll();
  const categories = await Category.findAll();
  res.status(200).render('catalog', {
    title: 'Товари',
    products,
    categories
  });
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const categories = await Category.findAll();
  const product = await Product.findOne({
    where: {
      id: req.params.id
    }
    // include: [{
    //   model: Price,
    //   as: 'Price'
    // }]
  });
  console.log()

  if (!product) {
    return next(new AppError('There is no product with that name.', 404));
  }

  res.status(200).render('product', {
    title: `${product.name}`,
    product,
    categories
  });
});

exports.getCatProducts = catchAsync(async (req, res, next) => {
  const products = await Product.findAll({
    include: [{
      model: CatProduct,
      as: 'CatProduct'
    }]
  });
  const categories = await Category.findAll();
  res.status(200).render('catalog', {
    title: 'Товари',
    products,
    categories
  });
});




