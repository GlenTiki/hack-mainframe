var spawn = require('child_process').spawn;

var spawnStr = 'ssh';
var startAdding = false;
process.argv.forEach(function(val, index, array){
  if(startAdding){
    spawnStr += val;
  } else {
    if(val === 'index.js' || val === 'hack-mainframe') startAdding = true;
  }
});

spawn(spawnStr, {
  stdio: [
  0,
  1,
  2
  ]
});
