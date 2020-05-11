// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

const FINGERMAPPING = {
  leftPinky : ['~', '`', '1', '!', '\t', 'Q', 'q', 'A', 'a', 'Z', 'z'],
  leftRing : ['2', '@', 'W', 'w', 'S', 's', 'X', 'x'],
  leftMiddle : ['3', '#', 'E', 'e', 'D', 'd', 'C', 'c'],
  leftPointy : ['4', '$', '5', '%', 'R', 'r', 'T', 't', 'F', 'f', 'G', 'g', 'V', 'v', 'B', 'b'],
  thumb : [' '],
  rightPointy : ['6', '^', '7', '&', 'Y', 'y', 'U', 'u', 'H', 'h', 'J', 'j', 'N', 'n', 'M', 'm'],
  rightMiddle : ['8', '*', 'I', 'i', 'K', 'k', '<', ','],
  rightRing : ['9', '(', 'O', 'o', 'L', 'l', '>', '.'],
  rightPinky : ['0', ')', '_', '-', '+', '=', 'P', 'p', '{', '[', '}', ']', '|', '\\', ':', ';', '"', '\'', '\n', '?', '/']
};

let typeText = "No text available";

app.post("/", function(req, res) {
  typeText = req.body.typeText;
  res.render("typeText", {
    ejsTypeText: typeText,
    ejsFirstChar: typeText[0]
  });
})

app.listen(3000, function() {
  console.log("Typing App started on port 3000");
});
