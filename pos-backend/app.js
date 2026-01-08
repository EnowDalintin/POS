require("dotenv").config();
const express = require("express");
const connectDB = require("./config/database");
const config = require("./config/config");
const globalErrorHandler = require("./middlewares/globalErrorHandler");
const createHttpError = require("http-errors");

const app = express();

const PORT = config.port;
connectDB();
//Middle wares
app.use(express.json()); //parse incoming request in json format
//Root Endpoint
app.get("/", (req, res) => {
  const err = createHttpError();

  res.json({ message: "Hello from POS Server!" });
});
//Other Endpoints
app.use("/api/user", require("./routes/userRoute"));

//Global Error Handler
app.use(globalErrorHandler);

app.listen(PORT, () => {
  console.log(`POS Server is listening on ${PORT}`);
});
