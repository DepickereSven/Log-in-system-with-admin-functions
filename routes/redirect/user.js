/**
 * Created by svend on 27/05/2018.
 */

const fileRead = require('../fileRead');

module.exports = (function () {

    let toSomeResources = function (res) {
        res.render('user', {
            user: {
                username: null,
                password: null
            },
            error: {
                message: null,
                messageForLogin: null,
                register: false
            }
        });
    };


    let renderAdmin = function (res) {
         fileRead.doFileReading()
            .then(function (data) {
                console.log(data.split(new RegExp(['\n', '\t'].join('|'), 'g')));
                console.log();
                res.render('adminpage', {
                    data: {
                        message: data.split(new RegExp(['\n', '\t'].join('|'), 'g'))
                    }
                })
            }
        )
    };

    return {
        toSomeResources: toSomeResources,
        renderAdmin: renderAdmin
    }

})();
