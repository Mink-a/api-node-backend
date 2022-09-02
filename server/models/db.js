const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.otjqore.mongodb.net/Movies?retryWrites=true&w=majority",
  {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD,
    useNewURLParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function () {
  console.log("Connected");
});
