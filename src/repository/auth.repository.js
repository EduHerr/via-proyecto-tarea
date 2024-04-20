const { create, find } = require("../../libs/modules/database/repository");

async function save(User){
    return await create('usuario', {...User});
}

async function login(nombre){
    return await find('usuario', [], `WHERE nombre = '${nombre}'`)
}

module.exports = { save, login };
