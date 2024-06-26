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

const fs = require('fs')

router.post('/music', upload.single('audio'), (req, res) => {
    res.send('File uploaded successfully')
})

router.post('/word', (req, res) => {
    const url = `C:\\Users\\22386\\Desktop\\Jay_music_word\\${req.query.name}.txt`
    fs.writeFileSync(url, Object.keys(req.body)[0])
    console.log("🚀 ~ router.post ~ url:", url)
    res.send('Word download successfully')
})

module.exports = router