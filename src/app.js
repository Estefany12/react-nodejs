//import express
const express=require('express');
const app= express();

app.set('port', process.env.PORT|| 3000);

//middlewares
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//import routes

const usuarioRoute= require('./routes/usuarioRoute');
app.use('/usuario', usuarioRoute);



app.use('/test', (req, res)=> {
res.send("test router");

});
app.use('/', (req, res)=> {
    res.send("Hello from node js server");
    
    });

app.listen(3000, () =>{
    console.log('server on port 3000');
});
