const {Schema,model} = require("mongoose");

const MessageSchema =  Schema({

    word:{
        type: String,
        required: [true,"Mensaje es obligatorio"]
    },
    allowed:{
        type: Boolean,
    },
    status:{
        type: String,
        default: 'active'
        
    },
    dateCreated:{
        type: Date, 
        default: Date.now
    },
    lastDateUpdate:{
        type: Date, 
        default: Date.now
    },
    dateDeleted:{
        type: Date, 
    }



})


module.exports = model('Messages',MessageSchema);