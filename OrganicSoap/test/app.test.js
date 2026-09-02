const test = require('node:test');
const assert = require('node:assert/strict');
const app = require('../app');

async function withServer(run) {
  const server = await new Promise((resolve) => { const instance = app.listen(0, () => resolve(instance)); });
  try { await run(`http://127.0.0.1:${server.address().port}`); } finally { await new Promise((resolve) => server.close(resolve)); }
}

test('health endpoint is available without a database connection', async () => {
  await withServer(async (url) => {
    const response = await fetch(`${url}/health`);
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
  });
});

test('invalid signup payload is rejected before persistence', async () => {
  await withServer(async (url) => {
    const response = await fetch(`${url}/user/signup`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' });
    assert.equal(response.status, 400);
  });
});

test('order creation requires authentication', async () => {
  await withServer(async (url) => {
    const response = await fetch(`${url}/orders`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' });
    assert.equal(response.status, 401);
  });
});

test('cart endpoints require authentication', async () => {
  await withServer(async (url) => {
    const response = await fetch(`${url}/cart`);
    assert.equal(response.status, 401);
  });
});

test('review submission requires authentication', async () => {
  await withServer(async (url) => {
    const response = await fetch(`${url}/reviews`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: '{}' });
    assert.equal(response.status, 401);
  });
});

test('profile and admin endpoints require authentication', async () => {
  await withServer(async (url) => {
    const [profile, admin] = await Promise.all([fetch(`${url}/user/profile`), fetch(`${url}/admin/dashboard`)]);
    assert.equal(profile.status, 401);
    assert.equal(admin.status, 401);
  });
});
