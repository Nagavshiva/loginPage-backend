const express = require('express');
const { getUserProfile, updateUserProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/profile', auth, getUserProfile);
router.put('/updateProfile', auth, updateUserProfile);

module.exports = router;
