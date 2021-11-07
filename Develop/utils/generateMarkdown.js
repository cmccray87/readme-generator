// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
  <br> 
  ![badge](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/issues-closed/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/github/last-commit/${data.github}/${data.repo})
  <br>
  ![badge](https://img.shields.io/badge/license-${data.license}-important)

  ## Description

  ${data.description}

  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [useCase](#useCase)
  [Features](#features)
  [Contributions](#contributions)
  [Licenses](#licenses)
  [Testing](#testing)
  [email](#email)

  ## Installation
  ${data.documentation}

  ## Features
  ${data.features}

  ## Contributions
  ${data.contributions}

  ## Licenses
  ![badge](https://img.shields.io/badge/license-${data.license}-important)
  <br>
  Permission to use this application is granted under the ${data.license} license. <https://opensource.org/licenses/${data.license}>


  ## Testing
  ${data.testing}

  ## Email
  Contact me : <a href="mailto:${data.email}">${data.email}</a>"
`;
}

module.exports = generateMarkdown;
