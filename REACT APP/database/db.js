const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect(
  "mongodb+srv://JSAIABHIRAM:Abhiram2k03@cluster0.cyv7cq1.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => console.log("Connected to the database!"))
  .on("error", (err) => console.log("Error with the database!", err));
