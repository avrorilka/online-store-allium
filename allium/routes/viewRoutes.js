const express = require('express');
const viewsController = require('../controllers/viewsController');
const sequelize = require("../db.js");

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/catalog', viewsController.getCatalog);
router.get('/product/:id', viewsController.getProduct);
router.get('/admin');

router.get('/getTotalAmount', viewsController.getTotalAmount);
router.get('/getOrderAmount', viewsController.getOrderAmount);

module.exports = router;
