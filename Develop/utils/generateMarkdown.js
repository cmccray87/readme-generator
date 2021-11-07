// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ![badge](https://img.shields.io/github/languages/top/${data.github}/${data.repo})
  <br> 
  ![badge](https://img.shields.io/github/languages/count/${data.github}/${data.repo})
  <br>
  ## Table of Contents

  [Description](#description)
  [Installation](#installation)
  [useCase](#useCase)
  [Features](#features)
  [Contributions](#contributions)
  [Licenses](#licenses)
  [Testing](#testing)
  [email](#email)

  ## Description

  ${data.description}
  <br>

  ## Installation
  ${data.documentation}
  <br>

  ## Features
  ${data.useCase}
  <br>

  ## Contributions
  ${data.contributions}

  ## Testing
  ${data.testing}

  ## Licenses
  ![badge](https://img.shields.io/badge/license-${data.license}-important)

  ## Contact
  Contact me : <a href="mailto:${data.email}">${data.email}</a>"
  Github : <a href="https://github.com/${data.github}">https://github.com/${data.github}</a>
`;
}

module.exports = generateMarkdown;
