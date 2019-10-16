'use strict';

const path = require('path');
const fse = require('fs-extra');

async function globalFunction() {
  let helperDir = path.join(__dirname, '../app/Helpers');
  let allHelperFiles = await fse.readdir(helperDir);
  for (let helperFile of allHelperFiles) {
    if(helperFile === 'index.js') {
      global.Helper = require(path.join(helperDir, helperFile));
    }else {
      let modelGlobalName = helperFile.replace('.js', '');
      global[modelGlobalName] = require(path.join(helperDir, helperFile));
    }
  }
}

function globalVariable() {

}
module.exports = {
  globalFunction,
  globalVariable
};
