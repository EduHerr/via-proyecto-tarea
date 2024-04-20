function NotEmpty(value, property){
    if(value.length == 0 && !value){
        throw new Error(`${property} no puede ir vacio`);
    }

    return;
}

module.exports = { NotEmpty };
