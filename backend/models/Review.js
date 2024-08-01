const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  item_id: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
