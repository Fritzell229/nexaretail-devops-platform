const request = require('supertest');
const app = require('../src/index');

describe('NexaRetail API', () => {
  test('GET /health returns ok', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /api/orders returns orders', async () => {
    const res = await request(app).get('/api/orders');
    expect(res.statusCode).toBe(200);
    expect(res.body.orders).toHaveLength(2);
  });
});
