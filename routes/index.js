const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../Sql-data/sql-connection'));

const index = require('./redirect/index');
const error = require('./redirect/error');
const user = require('./redirect/user');
const userList = require('./userList');

let insertValues = function (data, res) {
    knex('logindetails')
        .insert([{Username: data.username, EmailAdress: data.email, Password: data.password}])
        .then(
            index.fillInLoginDetails(data, res)
        );
};

let registerAnUser = function (data,req,res) {
    if (userList.addUser(data.username)){
        req.session.authenticated = true;
        req.session.user = data.username;
        index.login(data, res);
    } else {
        index.renderLoginWithErrors({
            username: data.username,
            messageForLogin: "Error, try again later",
            flag: "try to login again while already being logged in"
        }, res);
    }
};

router.get('/', function (req, res) {
    index.normalIndex(res);
});

router.post('/register', function (req, res) {
    let data = req.body;
    if (data.password === data["confirm-password"]) {
        knex('logindetails')
            .where('Username', data.username)
            .orWhere('EmailAdress', data.email)
            .select('Username')
            .then(function (answer) {
                if (answer[0] === undefined) {
                    insertValues(data, res);
                } else {
                    index.renderRegisterWithRenderHome({
                        message: 'This email was already used',
                        register: true
                    }, res)
                }
            })
    } else {
        index.renderRegisterWithRenderHome({
            message: "Passwords don't match",
            register: true,
            username: data.username
        }, res)
    }
});

router.post('/user/login', function (req, res) {
    let data = req.body;
    knex('logindetails')
        .where('Username', data.username)
        .select('Password')
        .then(function (Password) {
            if (Password[0] === undefined) {
                index.renderLoginWithErrors({
                    username: data.username,
                    messageForLogin: "Password or Username is wrong",
                    flag: "user don't exist"
                }, res);
            } else {
                if (Password[0].Password === data.password) {
                    registerAnUser(data,req,res);
                } else {
                    index.renderLoginWithErrors({
                        username: data.username,
                        messageForLogin: "Password or Username is wrong",
                        flag: "password isn't correct"
                    }, res);
                }
            }
        })
});

router.get('/user/:username/logout', function (req, res) {
    userList.removeUser(req.session.user);
    req.session.authenticated = false;
    index.normalIndex(res);
});

router.get('/user/admin/log', function (req, res) {
    if (req.session.authenticated && req.session.user === 'admin'){
        user.renderAdmin(res, req.session.user);
    } else {
        error.toErrorPage(res, {
            message: "You don't have the privilege to access these resources.",
            username: req.session.user,
            status: 403
        })
    }
});

router.get('/user/:username/someResource', function(req, res){
    if (req.session.authenticated){
        user.renderToLandingPage(res, req.session.user)
    } else {
        index.normalIndex(res);
    }
});

router.get('/user/:username/Generic', function (req, res) {
    if (req.session.authenticated){
        user.renderToGenericPage(res, req.session.user)
    } else {
        index.normalIndex(res);
    }
});

router.get('/user/:username/Elements', function (req, res) {
    if (req.session.authenticated){
        user.renderToElementsPage(res, req.session.user)
    } else {
        index.normalIndex(res);
    }
});

router.get('/user/:username/all', function (req, res) {
    if (req.session.authenticated){
        user.renderToAllPage(res, req.session.user)
    } else {
        index.normalIndex(res);
    }
});

module.exports = router;
