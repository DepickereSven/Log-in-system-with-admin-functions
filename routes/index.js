const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../Sql-data/sql-connection'));

const index = require('./redirect/index');


let insertValues = function(data, res){
    knex('logindetails')
        .insert([{Username: data.username, EmailAdress: data.email, Password: data.password}])
        .then(
            index.fillInLoginDetails(data,res)
        );
};

router.get('/', function (req, res, next) {
    index.normalIndex(res);
});

router.post('/login', function (req, res, next) {
    let data = req.body;
    knex('logindetails').where({
        Username: data.username
    }).select('Password')
        .then(function (Password) {
            switch (Password) {
                case undefined:
                    data.message = "Password or Username is wrong";
                    index.renderHomeWithUserNameFilledIn(data,res);
                    break;
                case Password[0].Password === data.password:
                    index.login(data,res);
                    break;
                default:
                    data.message = "Password or Username is wrong";
                    index.renderHomeWithUserNameFilledIn(data,res);
                    break;
            }
        })
});

router.post('/register', function (req, res, next) {
    let data = req.body;
    if (data.password === data["confirm-password"]){
        knex('logindetails')
            .where({
                Username: data.username,
                EmailAdress: data.email
            }).select('Username')
            .then(function (answer) {
                if (answer[0] === undefined) {
                    insertValues(data,res);
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


module.exports = router;
