const test = require('supertest') //chai
const app = require('../index')

describe('3. POST request of /todos', function(){
    it('a. should create a new todo', function(){
        let newTodo = {describtion: "Finish homework", isComplete=false}
        test(app)
        .post('/todos')
        .set('Accept', 'application/json') // request header
        .set('Content-Type', 'application.json') // response header
        .expect('Content-Type', /json/i) // the '/i' case insensitive
        .expect(/homework/i)
        .expect(200, done)
    })
})