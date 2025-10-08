/**
 * @file Express server entry point.
 */
const express = require('express');
const hexRoute = require('./routes/hex');

/**
 * Create an Express app.
 * @returns {import('express').Express} app
 */
function createApp() {
  const app = express();

  // ✅ Serve static frontend files
  app.use(express.static('public'));

  // Health check
  app.get('/health', (req, res) => {
    res.json({ status: 'ok' });
  });

  // Mount hex route
  app.use('/api', hexRoute);

  return app;
}

const app = createApp();

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
}

module.exports = app;
