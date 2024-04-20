function Length({ min=null, max=null}, value, property){
    const range = value.length;
    if(max != null && min == null){
        if(!(range === max)){
            throw new Error(`${property} debe de tener como maximo ${max} cantidad de caracteres`);
        }
    }
    else{
        if(range < min || range > max){
            throw new Error(`${property} debe de estar conformado entre ${min} y ${max} de caracteres`);
        }
    }
    return;
}

module.exports = { Length };
