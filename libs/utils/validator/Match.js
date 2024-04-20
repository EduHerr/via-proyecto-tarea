function Match(regex, value, errorMessage=null){
    const regx = new RegExp(regex);
    if(!regx.test(value)){
        errorMessage = !errorMessage
            ? 'Error al intentar validar con Regex'
            : errorMessage;
        
        throw new Error(errorMessage);
    }
    return;
}

module.exports = { Match };
