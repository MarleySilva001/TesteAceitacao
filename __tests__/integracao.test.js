const {addUsers, getUser, deleteUsers} = require('../src/users')
const {addOrder, getOrder, deleteOrder} = require('../src/order')

describe('Teste de integração de pedidos', () => {

    test('Testando a função adicionar usuarios e pedidos', () => {
        const user = {id: 1, name:'João'}
        const order = {id: 100, userId: 1 ,name:'mouse'}

        addUsers(user)
        addOrder(order)

        const findUser = getUser(1)
        const findOrder = getOrder(100)

        expect(findUser).toEqual(user)
        expect(findOrder).toEqual(order)
        expect(findOrder.userId).toBe(findUser.id)
    })

    test('Testando a função excluir usuarios e pedidos', () => {
        const user = {id: 2, name:'Maria'}
        const order = {id: 101, userId: 2 ,name:'caderno'}

        addUsers(user)
        addOrder(order)

        deleteOrder(101)
        deleteUsers(2)

        const findUser = getUser(2)
        const findOrder = getOrder(101)

        expect(findUser).toBeUndefined()
        expect(findOrder).toBeUndefined()
    })
})