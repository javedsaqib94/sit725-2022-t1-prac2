const express = require('express');
const app =  express();

app.use(express.static(__dirname + '/public'));
let addition = function(n1,n2){
    return n1 + n2;
}
let multiplication = function(n1,n2){
    return n1 * n2;
}
app.get('/stage', function(req, res){
    let user = req.query.user;
    console.log('I run succesfully on your server: ' + user);
    res.send('Hy!! its response from the server: ' + user);
})

app.get('/addition', function(req,res){
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let result = addition(n1,n2);
    console.log('Addition function run succesfully');
    res.send('Addition calculation is :' + result);
})

app.get('/multiplication', function(req,res){
    let n1 = parseInt(req.query.n1);
    let n2 = parseInt(req.query.n2);
    let result = multiplication(n1,n2);
    console.log('Multiplication function run succesfully');
    res.send('Multiplication calculation is : ' + result);
})

//Listening on port 4000 on locally

const port = 4000;
app.listen(port);
console.log('Hello to server listening to port number: ${port} ');