var Todos=require('../models/todoModel');
module.exports=function(app){
    app.get('/api/setupTodos',function(req,res){
        //seed database
        var starterTodos=[
            {
                username: 'test',
                todo: 'Learn Ukulele',
                isDone: false,
                hasAttachment:false
            },
            {
                username: 'test',
                todo: 'Complete automation using python course',
                isDone: false,
                hasAttachment:false
            },
            {
                username:'test',
                todo:'Learn SSH',
                isDone: false,
                hasAttachment:false
            }
        ];
        Todos.create(starterTodos,function(err,results){
            res.send(results);
        });
    });
}