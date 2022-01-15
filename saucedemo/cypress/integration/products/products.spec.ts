import { LoginPage } from '../../page-objects/login.page';
import { ProductsPage } from '../../page-objects/products.page';

const loginPage = new LoginPage();
const productsPage = new ProductsPage();

context('Module Products', () => {
  beforeEach(() => {
    cy.visit(loginPage.url);
  });
  describe('Products Functionality', () => {
    it('Should be able to sort the product name in descending order from Z-A', () => {
      loginPage.login();
      productsPage.selectProductSortByNameZA();
    });
    it('Should be able to sort product name in ascending order from Z-A', () => {
      loginPage.login();
      productsPage.selectProductSortByNameAZ();
    });
    it('Should be able to sort the product price from low to high', () => {
      loginPage.login();
      productsPage.selectProductSortByPriceLowToHigh();
    });
    it('Should be able to sort the product price from high to low', () => {
      loginPage.login();
      productsPage.selectProductSortByPriceHighToLow();
    });
  });
});
