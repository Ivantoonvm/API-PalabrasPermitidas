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
});
MessageSchema.methods.toJSON = function() {
    const { __v, _id, ...message  } = this.toObject();
    message.id = _id;
    return message;
}


module.exports = model('Messages',MessageSchema);