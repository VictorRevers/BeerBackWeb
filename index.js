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


app.get('/login',(req,res) =>{
     res.render('login')
})

app.get('/autenticacao', (req,res) =>{
    res.render('autenticacao')
})


app.get('/configuracoes', (req,res) =>{
    res.render('configuracoes')
})

app.listen(3000, ()=>{
    console.log('Servidor Rodando!');
});


