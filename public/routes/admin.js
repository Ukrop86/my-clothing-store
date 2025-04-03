const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/admin', adminController.getAdminPage);
router.post('/admin/add', adminController.addProduct);
router.post('/admin/delete', adminController.deleteProduct);
router.post('/admin/edit', adminController.editProduct);

module.exports = router;
