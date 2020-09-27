var express = require("express");
var route = express.Router();
var bConfig = require("../config/bookConfig.js");
const con = require("../controller/con-book.js");

//const { google } = require("googleapis");

route.get("/", function (req, res, next) {
  res.render("index", { title: "home" });
});

route.post("/fetchBook", con.getBook);

module.exports = route;
