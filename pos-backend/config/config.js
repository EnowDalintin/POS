require("dotenv").config();

const config = {
  port: process.env.PORT || 27017,
  databaseURI: process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/pos-dB",
  nodeEnv: process.env.NODE_ENV || "development",
};
module.exports = config;
