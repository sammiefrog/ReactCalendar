const express = require('express');
const morgan = require('morgan');
const PORT = process.env.PORT || 9001;
const path = require('path');
const api = require('./routes/api');
const app = express();
const passport = require("passport");
const mongoose = require('mongoose');


// Middleware:
/* istanbul ignore next */
process.env.NODE_ENV === 'production'
  ? app.use(morgan('common'))
  : app.use(morgan('dev'));

// Tell node where to serve static files from
app.use(express.static(path.join(__dirname, '../client/public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

// using passport for authentication
app.use(passport.initialize());
require("./config/passport")(passport);

// API routes
app.use('/api', api);

app.use(function (req, res) {
  res.status(404).send("That's a 404 folks...");
});

// Connect to the Mongo DB, handle depreciation warnings
mongoose
    .connect(process.env.MONGODB_URI || "mongodb://localhost/reactcalendar", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(console.log("Database is connected"))
    .catch(err => console.log(err));

const server = app.listen(PORT).on('listening', () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

module.exports = server; // Export for testing