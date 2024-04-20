const connect = require('./connection/service.js');

function create(
    table, 
    values
){
    let properties = '';
    let valor = '';

    //Get the fields and values
    Object.entries(values).forEach(([key, value], index) => {
        properties += (index + 1) == Object.entries(values).length
            ? `${key}`
            : `${key}, `;
        
        valor += typeof valor === 'string'
            ? `'${value}', `
            : `${value}`;

        if((index + 1) == Object.entries(values).length) { valor = valor.slice(0, -2); }
    });

    const query = `INSERT INTO ${table} (id, ${properties}) VALUES (uuid(), ${valor});`;

    return new Promise((resolve, reject) => {
        connect.query(query, (err, result) => {
            if(err){
                reject(`Error al intentar insertar registro en la tabla ${table}: ${err}`);
            }

            resolve(result);
        });
    })
}

function get(
    table,
    select = []
){
    select = this.getSelect(select);

    return new Promise((resolve, reject) => {
        connect.query(`SELECT ${select} FROM ${table};`, (err, result) => {
            if(err){
                reject(`Error al intentar leer la tabla ${table}: ${err}`);
            }

            resolve(result[0]);
        });
    });
}

function findById(
    table, 
    id,
    select = []
){
    select = getSelect(select);
    const query = `SELECT ${select} FROM ${table} WHERE id = ${id}`;

    return new Promise((resolve, reject) => {
        connect.query(query, (err, result) => {
            if(err){
                reject(`Error al intentar buscar por id en la tabla ${table}: ${err}`);
            }

            resolve(result[0]);
        });
    });
}

function find(
    table,
    select = [],
    filter
){
    select = getSelect(select);
    const query = `SELECT ${select} FROM ${table} ${filter}`;

    return new Promise((resolve, reject) => {
        connect.query(query, (err, result) => {
            if(err){
                reject(`Error al hacer una busqueda filtrada en la tabl ${table}: ${err}`)
            }

            resolve(result[0]);
        });
    });
}

function update(
    table,
    values,
    filter
){
    let setter = '';

    //Get [SETTERS]
    Object.entries(values).forEach(([key, value], index) => {
        setter += Object.entries(values).length == index
            ? `${key}=${value}`
            : `${key}=${value}, `;
    });

    const query = `UPDATE ${table} SET ${setters} ${filter};`;

    return new Promise((resolve, reject) => {
        connect.query(query, (err, result) => {
            if(err){
                reject(err);
            }
            resolve(result);
        });
    });
}

function getSelect(select){
    return select.length > 0
        ? select.forEach(property => `${property}, `)
        : '*';
}

module.exports = { create, get, findById, find, update };
