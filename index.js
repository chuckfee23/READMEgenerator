const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
    {
      type: "input",
      message:
        "Please provide a description of your project. Some questions to consider are: What was your motivation? What problem does it solve? What did you learn?",
      name: "description",
    },
    //   {
    //     type: "input",
    //     message: "Where are you located?",
    //     contents: "contents",
    //   },
    {
      type: "input",
      message: "Can you provide us with the instructions for installation?",
      name: "installation",
    },
    {
      type: "input",
      message: "Can you describe how this program will be used?",
      name: "usage",
    },
    // {
    //   type: "list",
    //   message: "Which of the following licenses does your project have?",
    //   choices: [],
    //   license: "license",
    // },
    {
      type: "input",
      message:
        "Who were your contributors? Please list them. If none, type N/A.",
      name: "contributing",
    },
    {
      type: "input",
      message: "How did you test your application? Please describe them.",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your GitHub url?",
      name: "GitHub",
    },
  ])
  .then((userResponses) => {
    // take user responses and write to file
    fs.writeFile("README.md", createREADME(userResponses), (userResponses) => {
      console.log("success!");
    });
  });

function createREADME(userResponses) {
  return `
# ${userResponses.title}

## Description

${userResponses.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${userResponses.installation}

## Usage

${userResponses.usage}

## License


## Contributors

${userResponses.contributing}

## Tests

${userResponses.tests}

## Questions

Have any questions? Reach out to me here:

[${userResponses.email}](mailto:${userResponses.email})

[${userResponses.GitHub}](${userResponses.GitHub})`;
}
