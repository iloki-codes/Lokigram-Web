const router = require('express').Router()
const messageCtrl = require('../controllers/messageCtrl.js');
const {auth} = require('../middleware/auth.js');
const uploads = require('../middleware/multer.js');

router.post('/message', auth, uploads, messageCtrl.createMessage)

router.get('/conversations', auth, messageCtrl.getConversations)

router.get('/message/:id', auth, messageCtrl.getMessages)

router.delete('/message/:id', auth, messageCtrl.deleteMessages)

router.delete('/conversation/:id', auth, messageCtrl.deleteConversation)


module.exports = router