const express = require('express')
const router = express.Router()
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, `D:\\A_own_code\\Jay\\static\\${req.query.album}`)
    },
    filename: function (req, file, cb) {
        cb(null, req.query.musicName)
    }
})
const upload = multer({ storage: storage })

router.post('/music', upload.single('audio'), (req,res) => {
    res.send('File uploaded successfully')
})

module.exports = router