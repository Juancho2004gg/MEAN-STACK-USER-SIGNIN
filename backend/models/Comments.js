const {Schema} = require('mongoose');
const ObjectId = Schema.ObjectId;

const commentSchema = new Schema({
    image_id:{type:Object.id},
    email:{type:String},
    name:{type:String},
    comment:{type:String,required:true}
},
{
    versionKey:false,
    timestamps:true
})

commentSchema.virtual('image').set(image=>{
    return this._image = image;
}).get(()=>{
    return this._image
})

module.exports=mongoose.model('Comments',commentSchema);