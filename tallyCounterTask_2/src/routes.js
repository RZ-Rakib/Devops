const express = require('express');
const router = express.Router();
const logger = require('./loggers');
const counter = require('./counter');

// Root route
router.get('/', (req, res) => {
  logger.info("[ENDPOINT] GET '/'");
  res.json({ message: 'Tally Counter API is running' });
});

// GET /counter-read
router.get('/counter-read', (req, res) => {
  try {
    const value = counter.get();
    logger.info(`[COUNTER] read ${value}`);
    res.json({ counter: value });
  } catch (err) {
    logger.error(`[COUNTER] read failed: ${err.message}`);
    res.status(500).json({ error: 'Failed to read counter' });
  }
});

// GET /counter-increase
router.get('/counter-increase', (req, res) => {
  try {
    const value = counter.increase();
    logger.info(`[COUNTER] increase ${value}`);
    res.json({ counter: value });
  } catch (err) {
    logger.error(`[COUNTER] increase failed: ${err.message}`);
    res.status(500).json({ error: 'Failed to increase counter' });
  }
});

// GET /counter-reset
router.get('/counter-reset', (req, res) => {
  try {
    const value = counter.reset();
    logger.warn(`[COUNTER] zeroed ${value}`);
    res.json({ counter: value });
  } catch (err) {
    logger.error(`[COUNTER] reset failed: ${err.message}`);
    res.status(500).json({ error: 'Failed to reset counter' });
  }
});

// Handle invalid routes
router.use((req, res) => {
  logger.warn(`[ENDPOINT] Invalid route: ${req.originalUrl}`);
  res.status(404).json({ error: 'Route not found' });
});

module.exports = router;
