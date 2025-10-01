/**
 * @file Utility functions for hex to rgb conversion.
 */

// Regex for valid hex (3 or 6 digits)
const HEX_REGEX = /^#?([A-Fa-f0-9]{3}|[A-Fa-f0-9]{6})$/;

/**
 * Validate hex string.
 * @param {string} hex
 * @returns {boolean}
 */
function isValidHex(hex) {
  return typeof hex === 'string' && HEX_REGEX.test(hex.trim());
}

/**
 * Normalize hex to #rrggbb
 * @param {string} hex
 * @returns {string}
 */
function normalizeHex(hex) {
  if (!isValidHex(hex)) throw new Error('Invalid hex color');
  let h = hex.replace(/^#/, '');
  if (h.length === 3) {
    h = h.split('').map((c) => c + c).join('');
  }
  return `#${h.toLowerCase()}`;
}

/**
 * Convert hex to RGB object
 * @param {string} hex
 * @returns {{r:number, g:number, b:number}}
 */
function hexToRgb(hex) {
  const norm = normalizeHex(hex);
  return {
    r: parseInt(norm.substr(1, 2), 16),
    g: parseInt(norm.substr(3, 2), 16),
    b: parseInt(norm.substr(5, 2), 16),
  };
}

module.exports = { isValidHex, normalizeHex, hexToRgb };
