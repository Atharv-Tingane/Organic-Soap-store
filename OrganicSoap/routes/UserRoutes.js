const express = require('express');
const router = express.Router();
const {signup, login, logout, getUser} = require('../controllers/userC');
const protect = require('../middleware/Auth');

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);
router.get('/user', protect, getUser);

module.exports = router;