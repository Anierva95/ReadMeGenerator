const axios = require("axios");
var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter your Github Username.",
      name: "username"
    }
  ]).then(function({ username }) {
    const queryURL = `https://api.github.com/users/${username}`;
    
    axios.get(queryURL).then(function(res) {
    console.log("Here is my data!!!")
    console.log(res.data.avatar_url);
    const userAvatar = res.data.avatar_url;
  })})