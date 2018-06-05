/**
 Created by svend on 28/05/2018.
 **/

const userDataList = require('./userDataList');
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io');

server.listen(8080, function () {
    console.log("socket is listening on 8080");
    console.log("server is running on 3000")
});

const serverSocket = io(server);

module.exports = (function () {

    serverSocket.on("connection", function (socket) {
        serverSocket.emit('remove', userDataList.userData);


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
