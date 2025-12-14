const express = require('express');
const router = express.Router();

const sweetController = require('../controllers/sweet.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const adminMiddleware = require('../middlewares/admin.middleware');

router.post('/', authMiddleware, sweetController.addSweet);
router.get('/', authMiddleware, sweetController.getSweets);
router.get('/search', authMiddleware, sweetController.searchSweets);
router.post('/:id/purchase', authMiddleware, sweetController.purchaseSweet);

module.exports = router;

router.post(
  '/:id/restock',
  authMiddleware,
  adminMiddleware,
  sweetController.restockSweet
);

router.delete(
  '/:id',
  authMiddleware,
  adminMiddleware,
  sweetController.deleteSweet
);
