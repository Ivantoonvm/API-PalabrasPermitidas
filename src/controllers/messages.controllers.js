const {response, request} =  require('express');
const Message = require('../models/message');
const moment = require('moment');

const MessagesGet = async (req=request,res= response) =>{
    
    const {id} = req.params;
    const message = await Message.findById(id);
    res.status(202).json(message);


}

const MessagesPost = async (req=request,res= response) =>{
    
    const {word,allowed} = req.body;
    const message = new Message({word,allowed});
    await message.save();
    const {_id,dateCreated,lastDateUpdate} = message;
    
    res.status(200).json({
        _id,
        dateCreated,
        lastDateUpdate,
        word,
        allowed,
    })
}

const MessagesSearch = async (req=request,res =response) =>{
   
    const validacion = {status: 'active'};

    const [ total, message ] = await Promise.all([
        Message.countDocuments(validacion),
        Message.find(validacion)
    ]);

    res.status(200).json({
        total,
        message
    });
    
}

const MessagesPut = async (req=request,res=response)=>{
    const{id,lastDateUpdate = moment().toISOString()} = req.params;
    
    const { word,allowed} = req.body;
    await Message.updateOne({_id:id}, {$set: {word,allowed,lastDateUpdate}})
    res.status(200).json({
        id,
        word,
        allowed,
        lastDateUpdate
    });
}

const MessagesDelete = async (req,res)=>{
    
    const {id,dateDeleted= moment().toISOString(),status = 'deleted'} = req.params
    const {word} = await Message.findById(id);
    await Message.updateOne({_id:id}, {$set: {dateDeleted,status}});   
    res.status(200).json({
            "status" : 200,
            "message": `Word ${word} deleted`,
            "CustomMessage": `La palabara o frase ${word} fue aliminada`
        });
}

module.exports = {
    MessagesPost,
    MessagesGet,
    MessagesSearch,
    MessagesPut,
    MessagesDelete
}