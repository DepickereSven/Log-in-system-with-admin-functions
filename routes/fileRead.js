/**
 Created by svend on 27/05/2018.
 **/

const fs = require('fs');
const util = require('util');

module.exports = (function () {

    let saveToFile = function (data) {
        let stream = fs.createWriteStream("failed-login-attempts.txt", {flags:'a'});
        stream.write(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} \t ${data.username} ${data.message} \n`)
    };

    const readFile = util.promisify(fs.readFile);

    async function doFileReading() {
      try  {
          return await readFile("failed-login-attempts.txt", "UTF-8");
      } catch (e) {
          console.log('error file', e)
      }
    }

    return {
        saveToFile: saveToFile,
        doFileReading: doFileReading
    }

})();
