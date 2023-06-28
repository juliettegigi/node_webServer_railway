const express=require('express')
var hbs = require('hbs');
require('dotenv').config();

const app=express();
const port=process.env.PORT;



hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.set('view engine','hbs')
app.use(express.static('public'));
app.get('/',(req,res)=>{
    res.render('home',{nombre:"Julia",titulo:"Curso de node"});
})
app.get('/generic',(req,res)=>{
    res.render('generic',{nombre:"Julia",titulo:"Curso de node"});
});
app.get('/elements',(req,res)=>{
    res.render('elements',{nombre:"Julia",titulo:"Curso de node"});
})
app.listen(port);

