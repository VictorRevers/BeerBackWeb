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

app.get('/receber',(req, res) =>{
    res.render('colector/receive');
});

app.get('/login-coletor',(req, res) =>{
    res.render('colector/login-colector');
});

app.get('/login-usuario',(req, res) =>{
     res.render('user/login-usuario');
});

app.get('/places', (req, res)=>{
    res.render('user/places/places');
});

app.get('/landingpage',(req,res) =>{
    res.render('user/landingpage')
})

app.get('/autenticacao', (req,res) =>{
    res.render('user/autenticacao')
})

app.get('/configuracoes', (req,res) =>{
    res.render('user/configuracoes')
})

app.get('/historico', (req,res) =>{
    res.render('user/historico')
})

app.listen(3000, ()=>{
    console.log('Servidor Rodando!');
});


