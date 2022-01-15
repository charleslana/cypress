export class LoginPage {
  url = '/';

  btnLogin() {
    return cy.get('[data-test="login-button"]');
  }

  inputPassword() {
    return cy.get('[data-test="password"]');
  }

  inputPasswordRequired() {
    cy.get('.error-message-container').should('be.visible');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Password is required'
    );
  }

  inputUsername() {
    return cy.get('[data-test="username"]');
  }

  inputUsernameRequired() {
    cy.get('.error-message-container').should('be.visible');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username is required'
    );
  }

  invalidUsernameOrPassword() {
    cy.get('.error-message-container').should('be.visible');
    cy.get('[data-test="error"]').should(
      'have.text',
      'Epic sadface: Username and password do not match any user in this service'
    );
  }

  isProductsPage() {
    cy.url().should('contain', 'inventory.html');
  }

  isLoginPage() {
    cy.url().should('eq', Cypress.config().baseUrl);
  }

  linkLogout() {
    return cy.get('#logout_sidebar_link');
  }

  login() {
    this.inputUsername().type(Cypress.env('username'));
    this.inputPassword().type(Cypress.env('password'), { log: false });
    this.btnLogin().click();
    this.isProductsPage();
  }

  menuBurger() {
    cy.get('#react-burger-menu-btn').click();
    cy.get('.bm-menu').should('be.visible');
  }
}
