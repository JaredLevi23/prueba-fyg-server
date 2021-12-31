const { Router } =require('express');
const { getProducts } = require('../sockets/socket');

const router = Router();

router.get( '/', getProducts  );

module.exports = router;