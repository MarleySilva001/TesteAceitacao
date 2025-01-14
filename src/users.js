const users = []

function addUsers(user) {
    //user.shift -> retorna no começo da array
    users.push(user)
    return user
}


function getUser(id) {
    return users.find(user => user.id === id)
}

function deleteUsers(id) {
    const index = users.findIndex(user => user.id === id)
    if (index !== -1) {
        return users. splice(index,1)[0]
    }
    return null
}

module.exports = {addUsers, getUser, deleteUsers}