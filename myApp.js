const express = require('express');
const helmet = require('helmet');
const app = express();

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => {
  console.log(`🥦Usful Programmer Info Security App Started on Port ${PORT}`);
});
