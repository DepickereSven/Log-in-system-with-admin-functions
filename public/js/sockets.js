const socket = io.connect('http://localhost:8080');

socket.on('users', function (msg) {
    console.log('add new user', msg);
    addThisRecord(msg);
});

socket.on('remove', function (msg) {
    console.log('remove');
    $('tbody').html('');
    addNewRecords(msg);
});

socket.on('welcome', function (msg) {
    console.log('welcome');
    $('tbody').html('');
    addNewRecords(msg);
});

let addThisRecord = function (userData) {
    addHTML(userData.index, {
            user: userData.userData.user,
            activeSince: userData.userData.activeSince
        }
    )
};


let addNewRecords = function (userData) {
    userData.forEach(function (el, index) {
        addHTML(index, {
            user: userData[index].user,
            activeSince: userData[index].activeSince
        })
    })
};


let addHTML = function (index, data) {
    $('tbody').append(`
    <tr>
        <th scope="row">${index}</th>
        <td>${data.user}</td>
        <td>${data.activeSince}</td>
    </tr>
  `)
};