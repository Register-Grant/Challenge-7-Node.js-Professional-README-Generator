// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  const licensePicked = data.LicenseType;

  let licenseBadge = "";

  if (licensePicked === "MIT") {
    licenseBadge = "[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    return licenseBadge;
  }
  if (licensePicked === "Apache") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      return licenseBadge;
  }
  if (licensePicked === "Boost") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
      return licenseBadge;
  }
  if (licensePicked === "BDS 3-Clause") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
      return licenseBadge;
  } if (licensePicked === 'None') {
    return licenseBadge;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  const licensePicked = data.License;
  
  //I just can't get this to render the license badge
  //So I'm leaving this here so the navigatin works
  //And adding a template literal to display the badge below
  if(licensePicked === 'None') {
    return "";
  } else {
    return `# License
    ${renderLicenseBadge(data)}`;
  }
 }

 const renderLicenseTOC = (data) => {
  const licensePicked = data.License;
 
  if(licensePicked === 'None') {
    return "";
  } else {
    return "* [License](#license)";
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title}
  ## https://github.com/${data.Github}/${data.Title}
  ## This is where my Screencastify will go
  # Description
  ${data.Description}
  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data)}
  * [Contributing](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necessary dependencies must be installed to run the application: ${
    data.Installation
  }
  # Usage
  In order to use this app, ${data.Usage}
  ${renderLicenseSection(data)}
  # ${renderLicenseBadge(data)}
  # Contributions
  Contributors: ${data.Contributions}
  # Tests
  The following is needed to run tests: ${data.Tests}
  # Questions
  If you have any questions about this repository contact ${data.Name} 
  directly at : ${data.Email}.`;
}

module.exports = generateMarkdown;