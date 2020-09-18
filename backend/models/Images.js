const mongoose   = require('mongoose');
const path       = require('path');

const imagesSchema = new mongoose.Schema({ 
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

module.exports = mongoose.model('Images', imagesSchema);