const express = require('express');
const router = express.Router();
const knex = require('knex')(require('../Sql-data/sql-connection'));

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        user: {
            username: null,
            password: null
        }
    });
});

router.post('/login', function (req, res, next) {
    let data = req.body;
    knex('logindetails').where({
        Username: data.username
    }).select('Password')
        .then(function (Password) {
            switch (Password){
                case undefined:
                    renderHomeWithUserNameFilledIn(data);
                    break;
                case Password[0].Password === data.password:
                    login(data);
                    break;
                default:
                    renderHomeWithUserNameFilledIn(data);
                    break;
            }
        })
});

login = function(data){
    res.render('home', {title: data.username})
};

renderHomeWithUserNameFilledIn = function(data) {
    res.render('index', {
        user: {
            username: data.username,
            password: null
        }
    })
};

router.post('/register', function (req, res, next) {
    let data = req.body;
    knex('logindetails')
        .insert([{Username: data.username, EmailAdress: data.email, Password: data.password}])
        .then(
            res.render('index', {
                user: {
                    username: data.username,
                    password: data.password
                }
            })
        );
});

module.exports = router;
