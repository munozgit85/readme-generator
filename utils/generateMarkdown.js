// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');
// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ``;
  } else {
    return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(license)})`
  }
}

// Returns the license link
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `https://mit-license.org/`
  }
  if (license === 'GPL') {
    return `https://www.isc.org/licenses/`
  }
  if (license === 'AUR') {
    return `https://www.apache.org/licenses/LICENSE-2.0` 
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. Please click the badge to review license.`
  }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}


  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#license)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  ***
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  
  ## Questions
  For further Questions About This Application , Please Feel Free To Use The Contact Below:
  >Email: ${data.email} 
  >GitHub : [${data.user}](https://github.com/${data.user})
  `;
}

module.exports = generateMarkdown;
