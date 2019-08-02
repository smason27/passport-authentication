const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();
// const routes = require("./routes");
// const signup = require("./routes/api");
const passport = require("passport");
const db = require("./models");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const api = require("./routes/api")
mongoose.Promise = global.Promise;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
 
}

app.use(cookieParser("keyboard cat"));
app.use(passport.initialize());
app.use(session({ 
  cookie: { maxAge: 60000 },
  secret: "keyboard cat" 
}));

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

// Define routes here



// app.post('/signup', (req, res) => {
//   console.log('user signup');
//   req.session.username = req.body.username;
//   res.end()
// })
app.use("/api", api);



// Send every other request to the React app
// Define any API routes before this runs
// app.get("#", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/locollab", {useNewUrlParser: true}).then(
  () => { 
      /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
      console.log('Connected to Mongo');
      
  },
  err => {
       /** handle initial connection error */ 
       console.log('error connecting to Mongo: ')
       console.log(err);
       
      }
);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
