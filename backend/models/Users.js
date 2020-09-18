const mongoose      = require('mongoose');
const { Schema }    =   mongoose;

const userSchema = new Schema({
    email: { type: String, required: true},
    password: { type: String, required: true }
    },
    {
        versionKey: false,
        timestamps: true
    })

module.exports = mongoose.model('Users', userSchema);