const { expect } = require('chai');
const { isValidHex, normalizeHex, hexToRgb } = require('../../server/lib/color');

describe('Color utils', () => {
  it('validates hex correctly', () => {
    expect(isValidHex('#fc0')).to.be.true;
    expect(isValidHex('ffcc00')).to.be.true;
    expect(isValidHex('xyz')).to.be.false;
  });

  it('normalizes hex to #rrggbb', () => {
    expect(normalizeHex('fc0')).to.equal('#ffcc00');
    expect(normalizeHex('#FFCC00')).to.equal('#ffcc00');
  });

  it('converts hex to rgb', () => {
    expect(hexToRgb('fc0')).to.deep.equal({ r: 255, g: 204, b: 0 });
  });

  it('throws on invalid hex', () => {
    expect(() => normalizeHex('oops')).to.throw();
  });
});
