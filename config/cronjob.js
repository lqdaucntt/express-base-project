const path = require('path');
const fse = require('fs-extra');
let cronjobDir = path.join(__dirname, '../cronjob');

// Load all config exclude error config
(async () => {
  try {
    let allCronjobFiles = await fse.readdir(cronjobDir);
    for (let cronjobFile of allCronjobFiles) {
      require(path.join(cronjobDir, cronjobFile));
    }
  } catch (e) {
    console.log(e)
  }
})();
