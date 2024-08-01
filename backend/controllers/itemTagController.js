const mongoose = require('mongoose');
const ItemTag = require('../models/ItemTag');
const Item = require('../models/Item');
const Tag = require('../models/Tag');

exports.createItemTag = async (req, res) => {
  const { item_id, tag_id } = req.body;

  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(item_id) || !mongoose.Types.ObjectId.isValid(tag_id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    // Check if item exists
    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Check if tag exists
    const tag = await Tag.findById(tag_id);
    if (!tag) {
      return res.status(404).json({ error: 'Tag not found' });
    }

    // Create itemTag
    const newItemTag = new ItemTag({
      item_id,
      tag_id
    });

    const savedItemTag = await newItemTag.save();
    res.status(201).json(savedItemTag);
  } catch (error) {
    console.error('Error creating item tag:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

exports.getItemTags = async (req, res) => {
  try {
    const itemTags = await ItemTag.find().populate('item_id tag_id');
    res.status(200).json(itemTags);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getItemTag = async (req, res) => {
  const { id } = req.params;
  try {
    const itemTag = await ItemTag.findById(id).populate('item_id tag_id');
    if (!itemTag) {
      return res.status(404).json({ message: 'Item tag not found' });
    }
    res.status(200).json(itemTag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateItemTag = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedItemTag = await ItemTag.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedItemTag) {
      return res.status(404).json({ message: 'Item tag not found' });
    }
    res.status(200).json(updatedItemTag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteItemTag = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItemTag = await ItemTag.findByIdAndDelete(id);
    if (!deletedItemTag) {
      return res.status(404).json({ message: 'Item tag not found' });
    }
    res.status(200).json({ message: 'Item tag deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
