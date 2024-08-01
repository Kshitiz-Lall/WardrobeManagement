const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemTagSchema = new Schema({
  item_id: { type: Schema.Types.ObjectId, ref: 'Item', required: true },
  tag_id: { type: Schema.Types.ObjectId, ref: 'Tag', required: true },
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ItemTag', itemTagSchema);
