const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'OK' });
});

console.log(process.version);

app.listen(3000, () => console.log('Server started on PORT: 3000'));
