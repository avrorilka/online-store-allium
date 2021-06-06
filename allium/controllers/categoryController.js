const sequelize = require("../db.js");
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const Category = sequelize.models.category;

exports.getAllCategories = factory.getAll(Category);