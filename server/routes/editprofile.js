'use strict';
const express = require('express');
const router = express.Router();
const EditProfileController = require('../controllers/editprofile');

router.post('/updatename', EditProfileController.updateName);

router.get('/getroles', EditProfileController.roles);






module.exports = router;