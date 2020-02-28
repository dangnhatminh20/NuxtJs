const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.get('/login', (req, res) => {
    console.log('Params: ', req.params);
    console.log('Query: ', req.query);
});

router.get('/todos', (req, res) => {
    res.json(todos);
});

router.get('/todos/:id', function (req, res) {
    // params được gửi thuộc kiểu string do đó phải convert params về kiểu integer 
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;
    //console.log('Params: ', req.params);
    // duyệt từng phần tử trong todos
    todos.forEach(function (todo) {
        if (todoId == todo.id) {
            matchedTodo = todo;
        }
    });
    // nếu tồn tại kết quả thì trả về dưới dạng json nếu không trả về status 404
    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
});
//Set id 
var todoNextId = 4;

router.use(bodyParser.json());

router.post('/todos', function (req, res) {
    //body của req
    var body = req.body;

    body.id = todoNextId++;
    todos.push(body);
    console.log(body.id);
    res.json(body);
});

router.delete('/todos/:id', function(req, res){
    var todoId = parseInt(req.params.id, 10);
    var matchedTodo;
    todos.forEach(function (todo) {
        if (todoId == todo.id) {
            
        }
    });
    if (matchedTodo) {
        res.json(matchedTodo);
    } else {
        res.status(404).send();
    }
});

module.exports = router;

var todos = [{
    id: 1,
    description: 'Build a simple API - nodejs',
    completed: false
}, {
    id: 2,
    description: 'Go to T-beer - team building',
    completed: false
}, {
    id: 3,
    description: 'Feed the dog ',
    completed: true
}];