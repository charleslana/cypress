export class CheckoutPage {
  textFirstName = 'Charles';
  textLastName = 'Lana';
  textPostalCode = '00000000';

  btnCancel() {
    return cy.get('[data-test="cancel"]');
  }

  btnCheckout() {
    return cy.get('[data-test="checkout"]');
  }

  btnContinue() {
    return cy.get('[data-test="continue"]');
  }

  btnFinish() {
    return cy.get('[data-test="finish"]');
  }

  inputFirstName() {
    return cy.get('[data-test="firstName"]');
  }

  inputFirstNameRequired() {
    cy.get('.error-message-container').should('be.visible');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Error: First Name is required'
    );
  }

  inputLastName() {
    return cy.get('[data-test="lastName"]');
  }

  inputLastNameRequired() {
    cy.get('.error-message-container').should('be.visible');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Error: Last Name is required'
    );
  }

  inputPostalCode() {
    return cy.get('[data-test="postalCode"]');
  }

  inputPostalCodeRequired() {
    cy.get('.error-message-container').should('be.visible');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Error: Postal Code is required'
    );
  }

  isCheckoutPageComplete() {
    cy.url().should('contain', 'checkout-complete.html');
  }

  isCheckoutPageStepOne() {
    cy.url().should('contain', 'checkout-step-one.html');
  }

  isCheckoutPageStepTwo() {
    cy.url().should('contain', 'checkout-step-two.html');
  }

  nameProductInCheckoutCompletePage() {
    return cy.get('.inventory_item_name');
  }
}
