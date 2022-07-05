import { Then, And, When, After } from '@badeball/cypress-cucumber-preprocessor';
import ListingPage from '../../../support/pageObjects/listingPage';
import CreateNewComputerPage from '../../../support/pageObjects/createNewPage';
import { tComputer } from '../../../support/pageObjects/createNewPage';
const newComputerDetail: tComputer = {
  computerName: '',
};

const companyName = [
  '-- Choose a company --',
  'Apple Inc.',
  'Thinking Machines',
  'RCA',
  'Netronics',
  'Tandy Corporation',
  'Commodore International',
  'MOS Technology',
  'Micro Instrumentation and Telemetry Systems',
  'IMS Associates, Inc.',
  'Digital Equipment Corporation',
  'Lincoln Laboratory',
  'Moore School of Electrical Engineering',
  'IBM',
  'Amiga Corporation',
  'Canon',
  'Nokia',
  'Sony',
  'OQO',
  'NeXT',
  'Atari',
  'Acorn computer',
  'Timex Sinclair',
  'Nintendo',
  'Sinclair Research Ltd',
  'Xerox',
  'Hewlett-Packard',
  'Zemmix',
  'ACVS',
  'Sanyo',
  'Cray',
  'Evans & Sutherland',
  'E.S.R. Inc.',
  'OMRON',
  'BBN Technologies',
  'Lenovo Group',
  'ASUS',
  'Amstrad',
  'Sun Microsystems',
  'Texas Instruments',
  'HTC Corporation',
  'Research In Motion',
  'Samsung Electronics',
];

When('User access to laning page', () => {
  cy.visit('');
});

And('User click add new computer', () => {
  ListingPage.clickAddNewButton();
});

And('User add new computer with above details', () => {
  CreateNewComputerPage.createNewComputer(newComputerDetail);
});

And('User enter computer name as {string}', (name: string) => {
  newComputerDetail.computerName = name;
});

And('User enter computer introduced date as {string}', (introDate: string) => {
  newComputerDetail.introduceDate = introDate;
});

And('User enter computer discontinued date as {string}', (discontinueDate: string) => {
  newComputerDetail.discontinueDate = discontinueDate;
});

And('User select company as {string}', (company: string) => {
  // newComputerDetail.companyName = company;
  if (company === 'random') {
    newComputerDetail.companyName = companyName[Math.floor(Math.random() * companyName.length)];
  } else {
    newComputerDetail.companyName = company;
  }
});

Then('Verify new computer added', () => {
  ListingPage.getAlertMessage().should('contain.text','Computer '+ newComputerDetail.computerName+' has been created');
  ListingPage.searchComputer(newComputerDetail.computerName);
  ListingPage.clickComputer(newComputerDetail);
  cy.get('#main > h1').should('contain.text','Edit computer');
});

And('User search for computer with name {string}', (name: string) => {
  ListingPage.searchComputer(name);
});

Then('Verify user deleted computer', () => {
  ListingPage.getAlertMessage().should('contain.text', 'Computer has been deleted');
});

When('User deleted new computer just created', () => {
  CreateNewComputerPage.clickDeleteButton();
});

After({ tags: '@cleanup' }, () => {
  // TODO: add tags for auto cleanup data after run
});
