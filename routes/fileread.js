/**
 Created by svend on 27/05/2018.
 **/

const fs = require('fs');

module.exports = (function () {

    let saveTofile = function (data) {
        let stream = fs.createWriteStream("failed-login-attempts.txt", {flags:'a'});
        stream.write(`${new Date().toISOString().replace('T', ' ').replace('Z', '')} \t ${data.username} ${data.message} \n`)
    };

    return {
        saveTofile: saveTofile
    }

})();
