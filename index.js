const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

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
    },
    {
      type: "input",
      message: "What kind of tests have you performed for this application?",
      name: "tests"
    },
    {
      type: "input",
      message: "Provide an E-mail for those with questions about your app.",
      name: "email"
    }
  ]).then(function(dingdong) {

    const queryURL = `https://api.github.com/users/${dingdong.username}`;

    axios.get(queryURL).then(function(res) {
    const userAvatar = res.data.avatar_url;

    credits = dingdong.credits + "\n\n";
    usage = dingdong.usage + "\n\n";
    installation = dingdong.installation + "\n\n";
    description = dingdong.description + "\n\n";
    title = dingdong.title + "\n\n";
    tests = dingdong.tests + "\n\n";
    email = dingdong.email + "\n\n";

    const data = `# Title \n\n ${title} ## Description  \n\n ${description} ## Table of Contents \n\n - [Installation](Intallation)\n\n - [Usage](Usage) \n\n - [Credits](Credits) \n\n - [Tests](Tests) \n\n - [Contact](Contact) \n\n ## Installation \n\n ${installation} ## Usage \n\n ${usage} ## Credits \n\n ${credits} ## Tests \n\n ${tests} ## Contact \n\n ${email} ![UserImage](${userAvatar})`;

    fs.writeFile("ReadMe.md", data, function(err) {
      if (err)  console.log(err);
    })})
  });
