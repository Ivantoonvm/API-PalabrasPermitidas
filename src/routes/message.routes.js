const {Router} = require('express');
const {check} =  require('express-validator');
const { MessagesPost,MessagesGet,MessagesSearch,MessagesPut, MessagesDelete } = require('../controllers/messages.controllers');
const { existMesageToId, existWord } = require('../helpers/db-validators');
const { idNoValido,idNoEncontado,campoVacio, WordExist } = require('../middlewares/validar-campos');

const router = Router();

//Obtener una palabra o frase medienta un id 

router.get('/message/:id',[
    check('id').isMongoId(),
    idNoValido,
    check('id').custom( existMesageToId ),
    idNoEncontado
],MessagesGet);

//Crear una palabra o una frase
router.post('/message',[
    check('word').custom(existWord),
    WordExist,
    check('word').not().isEmpty(),
    check('allowed').not().isEmpty(),
    campoVacio
    
],MessagesPost);

//Obetener lista de palabaras activas 
router.get('/message',MessagesSearch);

//Actualizar palabra o frase 
router.put('/message/:id',[
    check('id').isMongoId(),
    idNoValido,
    check('word').custom(existWord),
    WordExist,
    check('id').custom( existMesageToId ),
    idNoEncontado
],MessagesPut);

router.delete('/message/:id',[
    check('id').isMongoId(),
    idNoValido,
    check('id').custom( existMesageToId ),
    idNoEncontado
],MessagesDelete);


module.exports = router;