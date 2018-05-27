/**
 * Created by svend on 26/05/2018.
 */

const fileRead = require('../fileRead');

module.exports = (function () {

    let normalIndex = function (res) {
        res.render('index', {
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

    let renderHomeWithUserNameFilledIn = function (data, res) {
        res.render('index', {
            user: {
                username: data.username,
                password: null
            },
            error: {
                message: null,
                messageForLogin: null,
                register: false
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
                messageForLogin: null,
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
                messageForLogin: null,
                register: data.register
            }
        })
    };

    let renderLoginWithErrors = function (data, res) {
        fileRead.saveToFile({
            username: data.username,
            message: data.flag
        });
        res.render('index', {
            user: {
                username: data.username,
                password: null
            },
            error: {
                message: null,
                messageForLogin: data.messageForLogin,
                register: false
            }
        })
    };

    let login = function (data, res) {
        res.render('home', {
            username: data.username
        })
    };


    return {
        login: login,
        renderHomeWithUserNameFilledIn: renderHomeWithUserNameFilledIn,
        renderRegisterWithRenderHome: renderRegisterWithRenderHome,
        fillInLoginDetails: fillInLoginDetails,
        normalIndex: normalIndex,
        renderLoginWithErrors: renderLoginWithErrors
    }

})();
