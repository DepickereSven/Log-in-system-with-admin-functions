/**
 * Created by svend on 26/05/2018.
 */

module.exports = (function () {

    let login = function (data, res) {
        res.render('home', {title: data.username})
    };

    let renderHomeWithUserNameFilledIn = function (data, res) {
        res.render('index', {
            user: {
                username: data.username,
                password: null
            },
            error: {
                message: null,
                register: false
            }
        })
    };

    let renderRegisterWithRenderHome = function (data, res) {
        res.render('index', {
            user: {
                username: data.username,
                password: null
            },
            error: {
                message: data.message,
                register: data.register != undefined
            }
        })
    };

    let fillInLoginDetails = function (data, res) {
        res.render('index', {
            user: {
                username: data.username,
                password: data.password
            },
            error: {
                message: null,
                register: false
            }
        })
    };

    let normalIndex = function (res) {
        res.render('index', {
            user: {
                username: null,
                password: null
            },
            error: {
                message: null,
                register: false
            }
        });
    };


    return {
        login: login,
        renderHomeWithUserNameFilledIn: renderHomeWithUserNameFilledIn,
        renderRegisterWithRenderHome: renderRegisterWithRenderHome,
        fillInLoginDetails: fillInLoginDetails,
        normalIndex: normalIndex
    }

})();
