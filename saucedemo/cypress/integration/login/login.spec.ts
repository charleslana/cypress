import { LoginPage } from '../../page-objects/login.page';

const loginPage = new LoginPage();

context('Module Login', () => {
  beforeEach(() => {
    cy.visit(loginPage.url);
  });
  describe('Login Functionality', () => {
    it('Should be able to login', () => {
      loginPage.login();
    });
    it('Should not be able to login without providing username', () => {
      loginPage.btnLogin().click();
      loginPage.inputUsernameRequired();
    });
    it('Should not be able to login without providing password', () => {
      loginPage.inputUsername().type('username');
      loginPage.btnLogin().click();
      loginPage.inputPasswordRequired();
    });
    it('Should not be able to login with invalid username or password', () => {
      loginPage.inputUsername().type('username');
      loginPage.inputPassword().type('password');
      loginPage.btnLogin().click();
      loginPage.invalidUsernameOrPassword();
    });
    it('Should be able to log out of the system', () => {
      loginPage.login();
      loginPage.menuBurger();
      loginPage.linkLogout().click();
      loginPage.isLoginPage();
    });
  });
});
