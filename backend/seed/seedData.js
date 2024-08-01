// seedData.js
const mongoose = require('mongoose');
require('dotenv').config();

const Color = require('./models/Color');
const Brand = require('./models/Brand');
const Material = require('./models/Material');
const Size = require('./models/Size');

const colors = [
  { name: 'Red' },
  { name: 'Blue' },
  { name: 'Green' },
  { name: 'Black' },
  { name: 'White' },
];

const brands = [
  { name: 'Nike' },
  { name: 'Adidas' },
  { name: 'Puma' },
  { name: 'Reebok' },
  { name: 'Under Armour' },
];

const materials = [
  { name: 'Cotton' },
  { name: 'Polyester' },
  { name: 'Wool' },
  { name: 'Silk' },
  { name: 'Leather' },
];

const sizes = [
  { name: 'S' },
  { name: 'M' },
  { name: 'L' },
  { name: 'XL' },
  { name: 'XXL' },
];

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log('MongoDB connected');

    await Color.deleteMany({});
    await Color.insertMany(colors);
    console.log('Colors seeded');

    await Brand.deleteMany({});
    await Brand.insertMany(brands);
    console.log('Brands seeded');

    await Material.deleteMany({});
    await Material.insertMany(materials);
    console.log('Materials seeded');

    await Size.deleteMany({});
    await Size.insertMany(sizes);
    console.log('Sizes seeded');

    mongoose.connection.close();
  })
  .catch(err => console.error('MongoDB connection error:', err));
