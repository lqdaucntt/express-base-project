const path = require('path');
const fse = require('fs-extra');
let configDir = path.join(__dirname, 'config');

// Load all config exclude error config
(async () => {
  try {
    let allConfigFiles = await fse.readdir(configDir);
    for (let configFile of allConfigFiles) {
      if(configFile !== 'error.js') {
        require(path.join(configDir, configFile));
      }
    }
  } catch (e) {
    console.log(e)
  }
})();

