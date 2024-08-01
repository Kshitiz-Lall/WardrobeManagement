const express = require('express');
const mongoose = require('mongoose');
const { connectMongoDb } = require("./config/connection");
const cors = require("cors");

require('dotenv').config();

const app = express();
app.use(cors());

connectMongoDb();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Import routes
const userRoutes = require('./routes/users');
const itemRoutes = require('./routes/items');
const categoryRoutes = require('./routes/categories');
const colorRoutes = require('./routes/colors');
const reviewRoutes = require('./routes/reviews');
const tagRoutes = require('./routes/tags');
const itemTagRoutes = require('./routes/itemTags');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/colors', colorRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/tags', tagRoutes);
app.use('/api/itemTags', itemTagRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
