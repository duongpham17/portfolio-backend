const router = require('express').Router();
const data = require('../controller/data');

router.get('/coin-gecko/price', data.getCoinGeckoPrice);

router.get('/ergo/news', data.getErgoNews);

router.get('/cardano/news', data.getCardanoNews);

module.exports = router