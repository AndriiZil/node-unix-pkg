const Service = require('node-linux').Service;
const { join } = require('path');

const path = join(__dirname, '../dist/linux-pkg.bin');
// const path = join(__dirname, './server.js');
console.log(path);


const svc = new Service({
  name:'Hello World',
  description: 'The nodejs.org example web server.',
  script: path
});

svc.on('install',function() {
  svc.start();
});

// svc.install();
svc.uninstall();