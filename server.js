//const express = require('express');
//const app = express();
const port = 3010;
//const path = require('path');
const app = require('./src/app');

//app.use(express.static('static'));

app.listen(port, () => {
  console.log(`Servidor rodad a ando em http://localhost:${port}`);
});
