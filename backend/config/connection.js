const mongoose = require("mongoose");
require("dotenv").config();

async function connectMongoDb() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
  }
}

module.exports = {
  connectMongoDb,
};
