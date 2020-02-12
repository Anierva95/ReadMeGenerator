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
  ])

  .then(function({ username })) {
    const queryURL = `https://api.github.com/users/${username}/repos?per_page=100`;
    
    axios.get(queryURL).then(function(res) {

    console.log(res.data);
    console.log(res.data.url);
    console.log(res.data.avatar_url);
  })


  //.then(function(response) {

    //fs.writeFile('README.md', JSON.stringify(response), function(error) {
      //  return error;
    //});
   // }
 // );