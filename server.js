const next = require('next');
const app = next({ dev: process.env.NODE_ENV !== 'production' });

// With express.js
const express = require('express');
app.prepare().then(() => {
  express().listen(process.env.PORT || 3000);
});
