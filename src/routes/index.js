const express = require('express');
const scrapingRoutes = require('./scraping.routes');

const router = express.Router();

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    sucess: true,
    message: '🏡 Easy Crowller - Web Scraping',
    version: '1.0.0',
  });
});

router.use('/api/v1/scraping', scrapingRoutes);

module.exports = router;
