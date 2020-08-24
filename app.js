require("dotenv").config();

const express = require('express');
const app = express();
let bodyParser = require("body-parser");
let cors = require("cors");
let cookeParser = require("cookie-parser");


const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/votes",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }).then(() => {
      console.log("DB CONNECTED")
  }).catch(
      console.log("OOOPS")
  )

let authRoutes = require("./routes/auth");
let userRoutes = require("./routes/user");


app.use(bodyParser.json());
app.use(cors());
app.use(cookeParser());

app.use("/api",authRoutes);
app.use("/api",userRoutes);

  //heroku
  const PORT = process.env.PORT || 8000;

  if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
    app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });