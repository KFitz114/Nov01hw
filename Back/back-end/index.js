const express = require ('express');

const app = express();

app.listen('3400 ', () =>   {
    console.log('App listening on port 3400');
})

app.get('/', function (req, res) {
    res.send({data: 'home'});
})

app.get('/messages', function(req, res) {
    res.send({data: 'messages'})
})

app.get('/posts', function(req, res) {
    res.send({data: 'posts'})
})