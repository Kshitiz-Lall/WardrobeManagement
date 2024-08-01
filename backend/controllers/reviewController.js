const mongoose = require('mongoose');
const Review = require('../models/Review');
const User = require('../models/User');
const Item = require('../models/Item');

exports.createReview = async (req, res) => {
  const { user_id, item_id, rating, comment } = req.body;

  try {
    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(user_id) || !mongoose.Types.ObjectId.isValid(item_id)) {
      return res.status(400).json({ error: 'Invalid ID format' });
    }

    // Check if user exists
    const user = await User.findById(user_id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if item exists
    const item = await Item.findById(item_id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found' });
    }

    // Create review
    const newReview = new Review({
      user_id,
      item_id,
      rating,
      comment
    });

    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

exports.getReviews = async (req, res) => {
  try {
    const reviews = await Review.find().populate('user_id item_id');
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getReview = async (req, res) => {
  const { id } = req.params;
  try {
    const review = await Review.findById(id).populate('user_id item_id');
    if (!review) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.getReviewsByItem = async (req, res) => {
  const { item_id } = req.params;
  try {
    const reviews = await Review.find({ item_id }).populate('user_id');
    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for this item' });
    }
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.updateReview = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json(updatedReview);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};
