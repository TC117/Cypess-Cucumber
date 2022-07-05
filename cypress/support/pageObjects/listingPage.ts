import { find } from "../../../node_modules/cypress/types/lodash/index";
import { tComputer } from "./createNewPage";

class ListingPage {
  private pageElement = {
    // Locator
    searchInput: '#searchbox',
    searchButton: '#searchsubmit',
    createNewButton: '#add',
    alertMessage: '.alert-message',
    listOfComputer: 'tbody > tr'
  };

  clickAddNewButton() {
    cy.get(this.pageElement.createNewButton).click();
  }

  getAlertMessage() {
    return cy.get(this.pageElement.alertMessage);
  }

  searchComputer(name: string) {
    cy.get(this.pageElement.searchInput).type(name).type('{enter}');  
  }

  getListOfComputer() {
    return cy.get(this.pageElement.listOfComputer);
  }

  clickComputer(ComputerDetail: tComputer) {
    // TODO: handle case with empty details
    cy.get(this.pageElement.listOfComputer).each(($el)=>{
    const introdate: Date = new Date(ComputerDetail.introduceDate);
    const discondate: Date = new Date(ComputerDetail.discontinueDate);
    if (($el.find('td').eq(0).text().trim() === ComputerDetail.computerName) 
      && ($el.find('td').eq(1).text().trim() === introdate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'} ).replace(/ /g, ' '))
      && ($el.find('td').eq(2).text().trim() === discondate.toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'} ).replace(/ /g, ' '))
      && ($el.find('td').eq(3).text().trim() === ComputerDetail.companyName)      
    ){
      cy.wait(1000)
      cy.wrap($el).within(()=>{
        cy.get('a').click();
        return false;
      })
      return false;
    }
    })
  }
}

export default new ListingPage();
