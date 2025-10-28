const express = require('express');
const logger = require('./loggers');
const routes = require('./routes');

const app = express();
const PORT = 3000;

// Routes
app.use('/', routes);

app.listen(PORT, () => {
  logger.info('[MAIN] Starting');
  logger.info(`[MAIN] Server listening on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  logger.info('[MAIN] Stopping');
  process.exit(0);
});
