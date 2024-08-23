const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { body } = require('express-validator');
const validationMiddleware = require('../middleware/validationMiddleware');

router.post('/register', [
    body('username').isString().notEmpty(),
    body('password').isString().isLength({ min: 6 }),
], validationMiddleware, authController.register);

router.post('/login', [
    body('username').isString().notEmpty(),
    body('password').isString().notEmpty(),
], validationMiddleware, authController.login);

module.exports = router;
