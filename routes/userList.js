/**
 Created by svend on 27/05/2018.
 **/

const sockets = require('./sockets');
const userDataList = require('./userDataList');

module.exports = (function () {


    let addUser = function (username) {
        if (controlIfUserIsAlreadyActive(username)) {
            return false;
        } else {
            let newUser = {
                user: username,
                activeSince: new Date().toISOString().replace('T', ' ').replace('Z', '')
            };
            userDataList.userData.push(newUser);
            let index = userDataList.userData.findIndex((el => el.user === username));
            sockets.showUsers(newUser, index);
            return true
        }
    };

    let removeUser = function (username) {
        let index = userDataList.userData.findIndex((el => el.user === username));
        userDataList.userData.splice(index, 1);
        sockets.removeUser(userDataList.userData)
    };

    let controlIfUserIsAlreadyActive = function (username) {
        return !!userDataList.userData.find((el => el.user === username));
    };

    return {
        addUser: addUser,
        removeUser: removeUser
    }

})();
