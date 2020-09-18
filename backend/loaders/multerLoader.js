var async = require('async');
var _ = require('lodash');
const multer = require('multer')

const multerLoader = () =>{

  const storage = multer.diskStorage({
    destination: function(req, file, cb){
      cb(null, '../../public')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now())
    }
  });

  const upload = multer({ storage: storage })

  


}

module.exports = multerLoader;