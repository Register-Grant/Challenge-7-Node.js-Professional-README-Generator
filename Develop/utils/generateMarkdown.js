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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseTOC(data) {
  const licensePicked = data.License;
 
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return "* [License](#license)";
  }
};

function renderLicenseSection(data) {
  const licensePicked = data.license;
  
  if(licensePicked === 'None') {
    return "";
 
  } else {
    return `# License
    ${renderLicenseBadge(data)}`;
  }
 }

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.Title}
# ${renderLicenseBadge(data)}
`;
}

module.exports = generateMarkdown;
