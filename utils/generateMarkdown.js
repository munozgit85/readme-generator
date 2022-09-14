// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require('fs');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var licenseType = license.license;
  var yourLicense = ''
  if(licenseType === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  } else if (licenseType === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  } else if (licenseType === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
  } else {
    license.license = "N/A"
  }
  return yourLicense;
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'MIT') {
    return `
  ### MIT License
  https://mit-license.org/
   Copyright (c) [2022] [${data.user}]

    `
  } else if (data.license === 'Unlicense') {
    return `
  > __This is free and unencumbered software released into the public domain.__
  > 
  > Anyone is free to copy, modify, publish, use, compile, sell, or
  > distribute this software, either in source code form or as a compiled
  > binary, for any purpose, commercial or non-commercial, and by any
  > means.
  > 
  > In jurisdictions that recognize copyright laws, the author or authors
  > of this software dedicate any and all copyright interest in the
  > software to the public domain. We make this dedication for the benefit
  > of the public at large and to the detriment of our heirs and
  > successors. We intend this dedication to be an overt act of
  > relinquishment in perpetuity of all present and future rights to this
  > software under copyright law.
  > 
  > THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  > EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  > MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
  > IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
  > OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
  > ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
  > OTHER DEALINGS IN THE SOFTWARE.
  > 
  > For more information, please refer to <https://unlicense.org>
   `
  } else if (data.license === 'ISC') {
    return `
  > ### ISC License (ISC)
  > https://www.isc.org/licenses/
  > Copyright [2021] [${data.user}]
 
    `
  } else if (data.license === 'GNU LGPL') {
    return `
    
  > ### GNU LESSER GENERAL PUBLIC LICENSE
  https://www.gnu.org/licenses/lgpl-3.0.en.html
  Copyright [2007] [${data.user}]

    `
} else {
  return '';
}
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {if (data.license !== 'none') {
  return `
## License

${renderLicenseLink(data)}
  `
} else {
  return `
## License
There is no license for this project. 
  `
}
}

// TODO: Create a function to generate markdown for README
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
  ${renderLicenseSection(data)}
  ${renderLicenseBadge(data.license)}
  ${data.license}
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
