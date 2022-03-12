require('dotenv').config();
const express = require('express');
const { dbConnection } = require('./database/config');
const messageRouter =  require('./routes/message.routes');

const app = express();
const port= process.env.PORT || 4000; 

//middelware
app.use(express.json());
app.use('/', messageRouter);

app.listen(port, () => console.log('Server listening on port', port));

dbConnection();

