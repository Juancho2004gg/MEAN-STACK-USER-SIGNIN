const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.ObjectId;

const CommentSchema = new mongoose.Schema({
  image_id: { type: ObjectId },
  email: { type: String },
  name: { type: String },
  comment: { type: String },
  timestamp: { type: Date, default: Date.now }
});

CommentSchema.virtual('image')
  .set(function(image) {
    this._image = image;
  })
  .get(function () {
    return this._image;
  });

module.exports = mongoose.model('Comment', CommentSchema);