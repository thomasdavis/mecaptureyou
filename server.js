const next = require('next');
const app = next({ dev: process.env.NODE_ENV !== 'production' });

const handle = app.getRequestHandler();
// With express.js
const express = require('express');
app.prepare().then(() => {
  const server = express();
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.listen(process.env.PORT || 3000);
});
