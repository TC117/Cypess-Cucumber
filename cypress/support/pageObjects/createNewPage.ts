export type tComputer = {
  computerName: string;
  introduceDate?: string;
  discontinueDate?: string;
  companyName?: string;
};

class CreateNewComputerPage {
  private pageElement = {
    nameInput: '#name',
    introduceDateInput: '#introduced',
    discontinuedDateInput: '#discontinued',
    companyDropdown: '#company',
    createNewButton: '[type=submit]',
    cancelButton: '[class="btn"]',
    deleteButton: 'input[value="Delete this computer"]'
  };

  clickDeleteButton() {
    cy.get(this.pageElement.deleteButton).click();
  };
  createNewComputer(computerDetail: tComputer) {
    cy.get(this.pageElement.nameInput).type(computerDetail.computerName);
    if (computerDetail.introduceDate) {
      cy.get(this.pageElement.introduceDateInput).type(computerDetail.introduceDate);
    }
    if (computerDetail.discontinueDate) {
      cy.get(this.pageElement.discontinuedDateInput).type(computerDetail.discontinueDate);
    }
    if (computerDetail.companyName) {
      cy.get(this.pageElement.companyDropdown).select(computerDetail.companyName);
    }
    cy.get(this.pageElement.createNewButton).click(); 
  }
}

export default new CreateNewComputerPage();
