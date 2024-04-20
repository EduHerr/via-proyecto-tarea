require('dotenv').config();
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE,
});

connection.connect((err) => {
    if(err){
        console.log(`Error en conectar la BD: ${err}`);
        throw err;
    }
    
    console.log('Conexion BD exitosa');
});

module.exports = connection;
