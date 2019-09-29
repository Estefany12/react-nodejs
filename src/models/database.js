var Sequelize= require('sequelize');
// Option 2: Passing a connection URI
//const sequelize = new Sequelize('mysql://localhost:3306/nodedb');

/*const sequelize= new Sequelize(
'fabillac_node',
'fabillac_pruebas',
'H?*ROm}Y.=70', 
{
    host: '63.143.49.250',
    port: 3306,
    dialect: 'mysql'
}
);*/
const sequelize=new Sequelize (
    'nodedb', //database
    'root', // user 
    'fanyorange1214', //password
    {
        host: '127.0.0.1',
        port: 3306,
        dialect: 'mysql'
    }
);
   
module.exports=sequelize;