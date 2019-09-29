const Sequelize =require('sequelize');
var sequelize=require('./database'); //name of table
 
//import Role for FK roleId
var Role=require('./role');

var nametable='usuario'; //name of table

var Usuario=sequelize.define(nametable, {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
     
//pasword pruebasnode: x!F+*,)xH2G.
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    adress: Sequelize.STRING,
    phone: Sequelize.BIGINT,

    //LLAVE FORANEA FK
    roleId: {
        type: Sequelize.INTEGER,

        //this is the reference to another model
         references: {
             model: Role,
             key:'id'
         }
    }
})

Usuario.belongsTo(Role);
module.exports=Usuario;
 
