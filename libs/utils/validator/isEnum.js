function IsEnum(value, Enum=[], property){
    let coincidencia = false;

    if(Enum.length == 0){
        throw new Error('Enum vacio');
    }

    Enum.forEach(valor => { if(valor === value){ coincidencia = true; } });
    
    if(!coincidencia){
        throw new Error(`${property} valor invalido. No coincide con las opciones ${[...Enum]} disponibles dentro del Enum`);
    }

    return;
}

module.exports = { IsEnum };
