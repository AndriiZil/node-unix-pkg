const express = require('express');
const { join } = require('path');
const app = express();

app.get('/linux', (req, res) => {
  const { Service } = require('node-linux');

  const svc = new Service({
    name:'Hello World',
    description: 'The nodejs.org example web server.',
    script: '/server.js'
  });

  svc.on('install', () => {
    svc.start();
  });

  svc.install();
  // svc.uninstall();

  return res.send({ message: 'success' });
});

app.get('/mac', (req, res) => {
  const { Service } = require('node-mac');

  const svc = new Service({
    name: 'Mac NodeJS App',
    description: 'The NodeJS Mac Application',
    script: join(__dirname, '../dist/mac-nodejs')
  });

  svc.on('install', () => {
    svc.start();
  });

  svc.install();
  // svc.uninstall();

  return res.send({ message: 'success' });
});

app.listen(4000, () => console.log('Server started on port 4000'));
