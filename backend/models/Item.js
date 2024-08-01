const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  name: { type: String, required: true },
  category_id: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  color: { type: String, required: true },
  size: { type: String, required: true },
  material: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, default: 0.00 },
  quantity: { type: Number, default: 1 },
  image_url: { type: String },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Item', itemSchema);
