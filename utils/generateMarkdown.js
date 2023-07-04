// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license){
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
    case 'Boost':
      return '![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)';
    case 'BSD':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
    case 'Creative Commons':
      return '![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)';
    case 'Eclipse':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
    case 'GNU':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    case 'IBM':
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
    case 'ISC':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    case 'Mozilla':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
    case 'Open Data Commons':
      return '![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)';
    case 'Perl':
      return '![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)';
    case 'SIL':
      return '![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)';
    case 'Unlicense':
      return '![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)';
    case 'N/A':
      return '';
  }
}

// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license){
    case 'Apache 2.0':
      return '[Apache 2.0](https://opensource.org/licenses/Apache-2.0)';
    case 'Boost':
      return '[Boost](https://www.boost.org/LICENSE_1_0.txt)';
    case 'BSD':
      return '[BSD]((https://opensource.org/licenses/BSD-3-Clause))';
    case 'Creative Commons':
      return '[Creative Commons](http://creativecommons.org/publicdomain/zero/1.0/)';
    case 'Eclipse':
      return '[Eclipse](https://opensource.org/licenses/EPL-1.0)';
    case 'GNU':
      return '[GNU](https://www.gnu.org/licenses/gpl-3.0)';
    case 'IBM':
      return '[IBM](https://opensource.org/licenses/IPL-1.0)';
    case 'ISC':
      return '[ISC](https://opensource.org/licenses/ISC)';
    case 'MIT':
      return '[MIT](https://opensource.org/licenses/MIT)';
    case 'Mozilla':
      return '[Mozilla](https://opensource.org/licenses/MPL-2.0)';
    case 'Open Data Commons':
      return '[Open Data Commons](https://opendatacommons.org/licenses/by/)';
    case 'Perl':
      return '[Perl](https://opensource.org/licenses/Artistic-2.0)';
    case 'SIL':
      return '[SIL](https://opensource.org/licenses/OFL-1.1)';
    case 'Unlicense':
      return '[Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
    case 'N/A':
      return '';
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'N/A') {
    return '## License';
  }
  return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
  //const objData = JSON.parse(data);
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Table of Contents

  [Description](#description)

  [Installation](#installation)

  [Usage](#usage)

  [Contributing](#contributing)

  [Tests](#tests)
  
  [Questions](#questions)

  ## Description 

  ${data.description}

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ${renderLicenseLink(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Check out my GitHub repositories at [github.com/${data.user}](github.com/${data.user})

  If you have any questions, email me at ${data.email}

  ## References

  I used [https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba](https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba)
  to find a list of license badges and their image links.
`;
}

module.exports = generateMarkdown;
