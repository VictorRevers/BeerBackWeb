const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.render('index');
});


app.get('/login',(req, res) =>{
     res.render('login');
});


<<<<<<< HEAD
app.get('/places', (req, res)=>{
    res.render('places/places');
});
=======
app.get('/autenticacao', (req,res) =>{
    res.render('autenticacao')
})
>>>>>>> 2bb323e9d123e2b3c468f3b0a4d9b2e21e320317

app.listen(3000, ()=>{
    console.log('Servidor Rodando!');
});


