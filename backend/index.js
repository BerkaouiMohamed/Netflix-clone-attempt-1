const express = require("express");
const app = express();
const dotenv = require("dotenv");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const movieRoute = require("./routes/movies");
const mongoose=require("mongoose")
const listRoute = require("./routes/lists");
dotenv.config();
const URI = process.env.MONGO_URL;


mongoose.connect(URI, {
    //useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/movies", movieRoute);
app.use("/api/lists", listRoute);

app.listen(3310, () => {
  console.log("Backend server is running");
});