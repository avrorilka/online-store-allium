const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getOverview);
router.get('/catalog', viewsController.getProducts);
router.get('/catalog/:id', viewsController.getCatProducts);
router.get('/:id', viewsController.getProduct);
// router.get('/categories', viewsController.getAllCategories);

module.exports = router;
