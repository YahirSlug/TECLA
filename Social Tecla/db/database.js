const mysql = require("mysql");

const connection = mysql.createConnection({

host: process.env.HOST,
user: process.env.USER,
password: process.env.PASSWORD,
database: process.env.DATABASE

})

connection.connect((error)=>{
if(error){
console.log(`Error >///< \n${error}`)
return;






}
console.log(`Conexion Correcta n.n`)


})

module.exports = connection;