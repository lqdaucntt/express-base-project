'use strict';

const path = require('path');
const fse = require('fs-extra');
const cronJobDir = path.join(__dirname, '../cronJob');
// Load all config exclude error config
(async () => {
  try {
    const allCronJobFiles = await fse.readdir(cronJobDir);
    for (const cronJobFile of allCronJobFiles) {
      require(path.join(cronJobDir, cronJobFile));
    }
  } catch (e) {
    console.log(e)
  }
})();
