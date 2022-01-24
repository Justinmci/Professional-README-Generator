// Function that returns a license badge based on which license is passed in
  // If there is no license, return an empty string
  function renderLicenseBadge(license) { 
    if (license !== 'no license') {
      return `
    ![badge](https://img.shields.io/badge/license-${license}-blue)
      `;
    } else {
      return ' ';
    }
  }
  
  // Function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `
    [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]
      `;
    } else {
      return ' ';
    }
  }
  
  // Function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `# ${data.title}
        ## license 
        ${renderLicenseBadge(license)}
        '
        }
      `;
    } else {
      return ' ';
    }
   }
  
   // Function that returns license in table of contents
   // If there is no license, return an empty string
  function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
   }
  
  // Function to generate markdown for README
  function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ${renderLicenseBadge(data.license)}
    ## Table-of-Contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    ${data.what}
    ${data.why}
    ${data.how}
    ## [Installation](#table-of-contents)
    ${data.installation}
    ## [Usage](#table-of-contents)
    ${data.usage}
  `;
  }
  
  module.exports = generateMarkdown;