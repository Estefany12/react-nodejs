const express=require('express');
const router =express.Router(); //metodo de express

const usuarioController= require('../controllers/usuarioController');


 router.get('/list', usuarioController.list);
//router.get('/datatest', usuarioController.testdata);
//router.get('/test', usuarioController.test);


router.get('/save', (req, res) => {
res.json({status: "usuario saved"});
})


module.exports= router;