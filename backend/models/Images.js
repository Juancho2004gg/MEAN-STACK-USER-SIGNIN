const { Schema } = require('mongoose');
const path       = require('path');

const Images = new Schema({ 
    title:{type: String, required: true},
    description:{type: String},
    filename:{type: String},
    views:{type: Number, default:0},
    likes:{type: Number, default:0}  
},
{
    versionKey: false,
    timestamps: true
})

imageSchema.virtual('uniqueId').get(()=>{
    return this.filename.replace(path.extname(this.filename),'');
});

module.exports = mongoose.model('Images',imageSchema);