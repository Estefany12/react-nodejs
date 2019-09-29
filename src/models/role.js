const Sequalize =require('sequelize');
var sequalize= require('./database');


var nametable='role'; //name of table

var Role= sequalize.define(nametable, {
    role: Sequalize.STRING
},
{
    //remove, createAt, updated
    timeStamp:false
});
module.exports=Role;
   
