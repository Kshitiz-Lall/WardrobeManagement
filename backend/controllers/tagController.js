const Tag = require('../models/Tag');

exports.createTag = async (req, res) => {
  const { name } = req.body;

  try {
    const existingTag = await Tag.findOne({ name });
    if (existingTag) {
      return res.status(400).json({ message: 'Tag already exists' });
    }

    const newTag = new Tag({ name });
    await newTag.save();
    res.status(201).json(newTag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getTag = async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await Tag.findById(id);
    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.status(200).json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateTag = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedTag = await Tag.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.status(200).json(updatedTag);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteTag = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTag = await Tag.findByIdAndDelete(id);
    if (!deletedTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }
    res.status(200).json({ message: 'Tag deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
