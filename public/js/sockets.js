const socket = io.connect('http://localhost:8080');

socket.on('users', function (msg) {
    addThisRecord(msg);
});

socket.on('remove', function (msg) {
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