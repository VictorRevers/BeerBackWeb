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

=======
>>>>>>> 4faf813c9cd79882c3421f28b9f2167055981651
app.get('/places', (req, res)=>{
    res.render('places/places');
});

<<<<<<< HEAD






app.get('/coletor/receber', (req, res)=>{
    res.render('colector/receive');
});
=======
app.get('/login',(req,res) =>{
     res.render('login')
})

app.get('/landingpage',(req,res) =>{
    res.render('landingpage')
})

app.get('/autenticacao', (req,res) =>{
    res.render('autenticacao')
})


app.get('/configuracoes', (req,res) =>{
    res.render('configuracoes')
})
>>>>>>> 4faf813c9cd79882c3421f28b9f2167055981651

app.listen(3000, ()=>{
    console.log('Servidor Rodando!');
});


