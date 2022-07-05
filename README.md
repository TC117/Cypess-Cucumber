# Cypress Cucumber Test Example

[![Cypress](https://img.shields.io/npm/v/cypress?color=33ff99&label=cypress&logo=cypress&style=for-the-badge)](https://www.cypress.io)
![Cucumber](https://img.shields.io/npm/v/@cucumber/cucumber?color=%231dbb68&label=cucumber&logo=cucumber&style=for-the-badge)
![Cucumber Preprocessor](https://img.shields.io/npm/v/@badeball/cypress-cucumber-preprocessor?label=Cucumber%20preprocessor&style=for-the-badge)

This is a simple project that demonstrates end-to-end testing in [cypress.io](https://www.cypress.io/)
using [cucumber preprocessor](https://www.npmjs.com/package/@badeball/cypress-cucumber-preprocessor).

## Prerequisites

Make sure you have installed all the following prerequisites on your development machine:

| OS      | Node                                       |
|---------|--------------------------------------------|
| Windows | `winget install OpenJS.NodeJS.LTS`         |
| macOS   | `brew install node@16`                     |

## Executing The Tests

- Clone the repository.

- Change the directory.

- Run the test.

```shell
npm install && npm run test
```
test case: 
Verify user navigated to create a new computer page
Verify user could create a new computer with just require field
Verify user could create a new computer with computer name contains special character (!@#, etc)
Verify user could not create a new computer with name is only contains spaces
Verify user could not create a new computer when user input invalid date format
Verify user could create a new computer with all field ✅
Verify user could create computers with the same details
Verify user have a notification that computer was create successful
Verify user could return to dashboard when click cancel
Verify user could return to dashboard when click on header text
Verify user could find computer with search box
Verify that return “Nothing to display” when search a non-exist name 
Verify user could sort the list by clicking the name of column
Verify user could move back and forth between pages by clicking “Next” and “Previous”
Verify user could view correct the details of a computer by clicking its name
Verify user could update computer’s details in the detail page ✅
Verify user could update computer with computer name contains special characters (!@#, etc)
Verify user could not update computer with name is only contains spaces
Verify user could not update computer when user input invalid date format
Verify user could delete a computer in the detail page ✅
✅ = Automation Test case 
