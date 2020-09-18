const Images = require('../../models/Images')

const ImagesController = ({app}) =>{

   upload: async(req,res)=>{
      res.send('connected api')
   }


}

module.exports = ImagesController;