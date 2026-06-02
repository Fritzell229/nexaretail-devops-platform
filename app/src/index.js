const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', version: process.env.APP_VERSION || '1.0.0' });
});

app.get('/api/orders', (req, res) => {
  res.json({
    orders: [
      { id: 1, merchant: 'Shop A', amount: 150.00, status: 'delivered' },
      { id: 2, merchant: 'Shop B', amount: 89.99, status: 'pending' }
    ],
    total: 2
  });
});

app.listen(PORT, () => {
  console.log(`NexaRetail API running on port ${PORT}`);
});

module.exports = app;
