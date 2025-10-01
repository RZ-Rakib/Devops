/**
 * @file Route for hex-to-rgb conversion.
 */
const express = require('express');
const { hexToRgb, normalizeHex } = require('../lib/color');

const router = express.Router();

/**
 * GET /api/hex-to-rgb?hex=
 */
router.get('/hex-to-rgb', (req, res) => {
  const { hex } = req.query;

  if (!hex) {
    return res.status(400).json({ error: 'Query parameter "hex" is required' });
  }

  try {
    const rgb = hexToRgb(hex);
    res.json({
      hex: normalizeHex(hex),
      rgb,
      rgbString: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
