const Message =  require('../models/message');

const existMesageToId = async( id ) => {

    const existMessage = await Message.findById(id);
    if ( !existMessage ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

const existWord = async (word)=>{
    
    const existWord = await Message.findOne({word});
    if ( existWord ) {
        throw new Error(`La palaba ${word} ya esta registrada`);
    }
}

module.exports = {
    existMesageToId,
    existWord
}