const Todos = require('../models/todoModel.js');

module.exports = function(app) {

    app.get('/api/setupTodos', function(req,res){
        const startTodos = [
            {
                username:'jpark',
                todo: 'Get new car',
                isDone: false
            },
            {
                username:'jpark',
                todo: 'Go running and calisthenics',
                isDone: false
            },
            {
                username:'jpark',
                todo: 'Pick up baby sister',
                isDone: false
            }
        ];//End of Array

        Todos.create(startTodos, function (err, results) {

            res.send(results);
        }) //End of Todos.create
    })
}