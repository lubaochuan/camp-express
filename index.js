const express = require("express");
const path = require("path");
var mongoose = require("mongoose");
const server = express();

const config = require("./dbconfig.json");

// Create a MongoDB connection
mongoose.connect(`${config.connectionString}/${config.database}`, {
  useMongoClient: true
});

// Bring in some things from mongoose for easy use later
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// Define what a user object looks like.
// This eventually belongs in a separate file
const userSchema = Schema({
  id: ObjectId,
  name: String
});

// Creates the model based off of the schema and gives it
// a name. Note that the first argument must be the singular
// version of the collection name
const UserModel = mongoose.model("user", userSchema);

// GET all the users
server.get("/api/users", (req, res) => {
  UserModel.find({}, (err, users) => {
    res.send(users);
  });
});

const port = process.env.PORT || 5000;
server.listen(port);

console.log(`App listening on ${port}`);

module.exports = server;
