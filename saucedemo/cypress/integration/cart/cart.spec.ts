import { CartPage } from '../../page-objects/cart.page';
import { LoginPage } from '../../page-objects/login.page';

const loginPage = new LoginPage();
const cartPage = new CartPage();

context('Module Cart', () => {
  beforeEach(() => {
    cy.visit(loginPage.url);
  });
  describe('Cart Functionality', () => {
    it('Should be able to add a product to cart', () => {
      loginPage.login();
      cartPage.addCart();
    });
    it('Should be able to remove a product from the products page', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.hasRemoveButton();
      cartPage.btnRemoveProductFromCart().click();
      cartPage.isEmptyCart();
    });
    it('Should be able to view the shopping cart', () => {
      loginPage.login();
      cartPage.cart();
    });
    it('Should be able to view the shopping cart and return to the products page', () => {
      loginPage.login();
      cartPage.cart();
      cartPage.btnBackProducts().click();
      loginPage.isProductsPage();
    });
    it('Should be able to remove a product within the cart page', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      cartPage.hasRemoveButton();
      cartPage.btnRemoveProductFromCart().click();
      cartPage.isEmptyCart();
    });
    it('Should be able to view the product name on the cart page, same as the order placed on the products page', () => {
      loginPage.login();
      cartPage.nameProduct().then(nameProductPage => {
        cartPage.addCart();
        cartPage.cart();
        cartPage.nameProductInCartPage().then(nameCartPage => {
          expect(nameProductPage.text()).equal(nameCartPage.text());
        });
      });
    });
  });
});
