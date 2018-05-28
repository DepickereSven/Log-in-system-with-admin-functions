/**
 Created by svend on 28/05/2018.
 **/

const userDataList = require('./userDataList');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io');

server.listen(8080, function () {
    console.log("listening on 8080");
});

const serverSocket = io(server);

module.exports = (function () {

    serverSocket.on("connection", function (socket) {
        console.log("client connected");
        serverSocket.emit('welcome', userDataList.userData);


        socket.on("disconnect", () => {
            console.log("disconnect");
        });
    });


    let showUsers = function (userData, index) {
        serverSocket.emit('users', {
            userData, index
        });
    };


    let removeUser = function (userData) {
        serverSocket.emit('remove', userData);
    };

    return {
        showUsers: showUsers,
        removeUser: removeUser
    }

})();
