require('dotenv').config();
const express = require('express')
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const MongoDBStore = require("connect-mongo");
const mainRoute = require("./routes/mainpage.js");
const userRoute = require("./routes/users.js");
const transferRoute = require("./routes/transfers.js");
const trasnactionRoute = require("./routes/transactions.js");
const app = express()

const PORT = process.env.PORT || 3000

const day = 1000 * 60 * 60 * 24 //1 day in milliseconds 
app.use(session({
  secret: 'fdahvx1qp6m66k3u',
  cookie: {
    maxAge: day 
  },
  store: MongoDBStore.create({
    mongoUrl: process.env.mongo_url,
    collection: 'my_sessions',
    autoRemove: 'native'
  }),
  resave: true,
  saveUninitialized: false
}));

app.use(cookieParser());
app.use(express.json());

app.use("/main",mainRoute)
app.use("/user",userRoute)
app.use("/transfer",transferRoute)
app.use("/transaction",trasnactionRoute)

mongoose.connect(process.env.mongo_url)
  .then(() =>{
    // start the Express server
    app.listen(PORT, () => {
      console.log(`Server connected to mongo and is running on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
});
