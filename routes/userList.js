/**
 Created by svend on 27/05/2018.
 **/

module.exports = (function () {

    const users = [];

    let addUser = function (username) {
        if (controlIfUserIsAlreadyActive(username)) {
            return false;
        } else {
            users.push({
                user: username,
                activeSince: new Date().toISOString().replace('T', ' ').replace('Z', '')
            });
            console.log(users);
            return true
        }
    };

    let removeUser = function (username) {
        users.splice(users.findIndex((el => el.user === username)), 1);
        console.log(users);
    };

    let controlIfUserIsAlreadyActive = function (username) {
        return !!users.find((el => el.user === username));
    };

    return {
        addUser: addUser,
        removeUser: removeUser,
        usernames: users
    }

})();
