'use strict';
const app = require('./app');
const db = require('../db');
const port = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Example app listening on port ${port}!');
});
