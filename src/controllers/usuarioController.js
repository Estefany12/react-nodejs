const controllers= {}

//import model

var sequelize = require('../models/database');
var Usuario=require('../models/usuario');
var Role=require('../models/role');

//prueba front, para migrar a tabla
sequelize.sync()

  controllers.list = async(req, res)=> {
    
    var data= await Usuario.findAll({
     include: [ Role]
    
    })
    .then(function(data){
        return data;
    })
    .catch(error => {
           return error;
    });
   
   res.json({success: true, data : data});
}


//prueba backend
/*controllers.testdata= async(req, res)=> {
    const response= await sequelize.sync().then(function() {


        //create role
       // Role.create({
        //    role: 'Admin'
       // });
        //create user
        Usuario.create({
            name: 'monse',
            email:'reynoso@gmail.com',
            adress:'jalisco',
            phone:'1111111478',
            roleId:1
        });
        //llama a todos los datos del usuario

        const data=Usuario.findAll()
        return data;
    }) 
        .catch(error => {
           return error;
           
        });  
        res.json({success: true, data: response} );  
}

controllers.test=(req, res) => {

    const data= {
        name: "Fany",
        age:24,
        city:"mexico"
    }
    console.log("execute from controllers usuario")
    res.json (data);
}  */
  
module.exports=controllers;