const axios = require("axios");
var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "Please enter your Github Username.",
      name: "username"
    },
    {
      type: "input",
      message:"What is the title of your project?",
      name: "title"
    },
    {
      type: "input",
      message:"Please provide a description of your project",
      name: "description"
    },
    {
      type: "input",
      message:"How do you install this project?",
      name: "installation"
    },
    {
      type: "input",
      message: "Please provide directions on how to use this app.",
      name: "usage"
    },
    {
      type: "input",
      message: "Please provide who has contributed to this project",
      name: "credits"
    }
  ]).then(function({ username, credits, usage, installation, description, title }) {

    const queryURL = `https://api.github.com/users/${username}`;

    axios.get(queryURL).then(function(res) {
      const userAvatar = res.data.avatar_url;

    credits = credits + "\n\n";
    usage = usage + "\n\n";
    installation = installation + "\n\n";
    description = description + "\n\n";
    title = title + "\n\n"

    const data = `# Title \n\n ${title} ## Description  \n\n ${description} ## Table of Contents \n\n - [Installation](Intallation)\n\n - [Usage](Usage) \n\n - [Credits](Credits) \n\n ## Installation \n\n ${installation} ## Usage \n\n ${usage} ## Credits \n\n ${credits} ${userAvatar}`;

    fs.writeFile("ReadMe.md", data, function(err) {
      if (err)  console.log(err);
    })})});
