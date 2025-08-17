const multer = require('multer');
const {v4: uuid} = require('uuid');

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, "uploads");
    },
    filename(req, file, callback) {
        const id = uuid();
        const extName = file.originalname.split(".").pop();
        const fileName = `${id}.${extName}`;

        callback(null, fileName);
    }
})

const uploads = multer({storage}).array("images", 5);

module.exports = uploads;