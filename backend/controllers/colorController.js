const Color = require('../models/Color');

exports.createColor = async (req, res) => {
  const { name } = req.body;

  try {
    const existingColor = await Color.findOne({ name });
    if (existingColor) {
      return res.status(400).json({ message: 'Color already exists' });
    }

    const newColor = new Color({ name });
    await newColor.save();
    res.status(201).json(newColor);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getColors = async (req, res) => {
  try {
    const colors = await Color.find();
    res.status(200).json(colors);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getColor = async (req, res) => {
  const { id } = req.params;
  try {
    const color = await Color.findById(id);
    if (!color) {
      return res.status(404).json({ message: 'Color not found' });
    }
    res.status(200).json(color);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateColor = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedColor = await Color.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedColor) {
      return res.status(404).json({ message: 'Color not found' });
    }
    res.status(200).json(updatedColor);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteColor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedColor = await Color.findByIdAndDelete(id);
    if (!deletedColor) {
      return res.status(404).json({ message: 'Color not found' });
    }
    res.status(200).json({ message: 'Color deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
