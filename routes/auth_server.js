const {Router} = require('express');
const { serverAuth } = require('../controllers/auth');
const router = Router();

router.post('/', serverAuth);

module.exports = router;
