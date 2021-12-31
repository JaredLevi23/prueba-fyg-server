const {Router} = require('express');
const { googleAuth } = require('../controllers/auth');
const router = Router();

router.post('/', googleAuth);

module.exports=  router;
