/**
 * Created by svend on 26/05/2018.
 */

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
        console.log('hay');
        console.log(data);
        res.render('index', {
            user: {
                username: data.username,
                password: null
            },
            error: {
                message: data.message,
                messageForLogin: data.messageForLogin,
                register: data.register != undefined
            }
        })
    };

    let login = function (data, res) {
        res.render('home', {title: data.username})
    };


    return {
        login: login,
        renderHomeWithUserNameFilledIn: renderHomeWithUserNameFilledIn,
        renderRegisterWithRenderHome: renderRegisterWithRenderHome,
        fillInLoginDetails: fillInLoginDetails,
        normalIndex: normalIndex
    }

})();
