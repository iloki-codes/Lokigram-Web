const router = require('express').Router();
const {auth} = require('../middleware/auth.js');
const notifyCtrl = require('../controllers/notifyCtrl.js');
// const uploads = require('../middleware/multer.js');

router.post('/notify', auth, notifyCtrl.createNotify); // uploads

router.delete('/notify/:id', auth, notifyCtrl.removeNotify);

router.get('/notifies', auth, notifyCtrl.getNotifies);

router.patch('/isReadNotify/:id', auth, notifyCtrl.isReadNotify);

router.delete('/deleteAllNotify', auth, notifyCtrl.deleteAllNotify);

module.exports = router;