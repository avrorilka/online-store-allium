const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/catalog', viewsController.getCatalog);
router.get('/product/:id', viewsController.getProduct);
router.get('/admin');
// router.get('/categories', viewsController.getAllCategories);

module.exports = router;
