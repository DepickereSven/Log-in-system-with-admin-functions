/**
 * Created by svend on 27/05/2018.
 */

const fileRead = require('../fileRead');

module.exports = (function () {

    let toSomeResources = function (res, data) {
        fileRead.saveToFile({
            username: data.username ? data.username : "not logged in user ",
            message: data.message
        });
        res.render('error', {
            message: data.message,
            username: data.username,
            error: {
                status: data.status
            }
        });
    };

    return {
        toSomeResources: toSomeResources
    }

})();
