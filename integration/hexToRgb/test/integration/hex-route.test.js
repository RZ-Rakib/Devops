const request = require('supertest');
const { expect } = require('chai');
const app = require('../../server/server');

describe('GET /api/hex-to-rgb', () => {
  it('returns rgb for valid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb?hex=ffcc00');
    expect(res.status).to.equal(200);
    expect(res.body.rgb).to.deep.equal({ r: 255, g: 204, b: 0 });
  });

  it('handles 3-digit hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb?hex=fc0');
    expect(res.status).to.equal(200);
    expect(res.body.hex).to.equal('#ffcc00');
  });

  it('requires hex param', async () => {
    const res = await request(app).get('/api/hex-to-rgb');
    expect(res.status).to.equal(400);
  });

  it('rejects invalid hex', async () => {
    const res = await request(app).get('/api/hex-to-rgb?hex=zzz');
    expect(res.status).to.equal(400);
  });
});
