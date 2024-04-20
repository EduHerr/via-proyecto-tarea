function OnlyLetters(value, property) {
    if(!(/^[A-Za-z]+$/.test(value))){
        throw new Error(`${property} solo puede contener letras`);
    }
    return;
}

module.exports = { OnlyLetters };
