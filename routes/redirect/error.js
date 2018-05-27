/**
 * Created by svend on 27/05/2018.
 */

module.exports = (function () {

    let toSomeResources = function (res, data) {
        res.render('error', {
            message: data.message,
            username: data.username,
            error: {
                status: 403
            }
        });
    };

    return {
        toSomeResources: toSomeResources
    }

})();
