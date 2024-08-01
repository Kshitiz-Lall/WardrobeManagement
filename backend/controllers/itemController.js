const mongoose = require('mongoose');
const Item = require('../models/Item');
const User = require('../models/User');
const Category = require('../models/Category');
const Color = require('../models/Color');

exports.createItem = async (req, res) => {
  const { user_id, name, category_id, color, size, material, brand, price, quantity, image_url } = req.body;

  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id) || !mongoose.Types.ObjectId.isValid(category_id) || !mongoose.Types.ObjectId.isValid(color)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    // Check if user exists
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if category exists
    const category = await Category.findById(category_id);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }

    // Check if color exists
    const colorDoc = await Color.findById(color);
    if (!colorDoc) {
      return res.status(404).json({ error: 'Color not found' });
    }

    // Create item
    const newItem = new Item({
      user_id,
      name,
      category_id,
      color,
      size,
      material,
      brand,
      price,
      quantity,
      image_url
    });

    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error('Error creating item:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};


exports.getItems = async (req, res) => {
  try {
    const items = await Item.find().populate('category_id user_id');
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findById(id).populate('category_id user_id');
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateItem = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedItem = await Item.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
