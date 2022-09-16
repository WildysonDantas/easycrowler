const router = require('express').Router();
const ScapingService = require('../controllers/scraping.services');
//const Sc = require('../models/user.model');

const scapingService = new ScapingService();

router.get('/', async (req, res) => {
  return res.json(await scapingService.get());
});

module.exports = router;
