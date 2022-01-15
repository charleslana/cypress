import { CartPage } from '../../page-objects/cart.page';
import { CheckoutPage } from '../../page-objects/checkout.page';
import { LoginPage } from '../../page-objects/login.page';

const loginPage = new LoginPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

context('Module Checkout', () => {
  beforeEach(() => {
    cy.visit(loginPage.url);
  });
  describe('Checkout Functionality', () => {
    it('Should be able to complete a purchase', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.inputLastName().type(checkoutPage.textLastName);
      checkoutPage.inputPostalCode().type(checkoutPage.textPostalCode);
      checkoutPage.btnContinue().click();
      checkoutPage.isCheckoutPageStepTwo();
      checkoutPage.btnFinish().click();
      checkoutPage.isCheckoutPageComplete();
    });
    it('Should be able to go to the first step checkout page and cancel', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.btnCancel().click();
      cartPage.isCartPage();
    });
    it('Should be able to go to the second step checkout page and cancel', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.inputLastName().type(checkoutPage.textLastName);
      checkoutPage.inputPostalCode().type(checkoutPage.textPostalCode);
      checkoutPage.btnContinue().click();
      checkoutPage.isCheckoutPageStepTwo();
      checkoutPage.btnCancel().click();
      loginPage.isProductsPage();
    });
    it('Should not be able to checkout without providing first name', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.btnContinue().click();
      checkoutPage.inputFirstNameRequired();
    });
    it('Should not be able to checkout without providing last name', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.btnContinue().click();
      checkoutPage.inputLastNameRequired();
    });
    it('Should not be able to checkout without providing postal code', () => {
      loginPage.login();
      cartPage.addCart();
      cartPage.cart();
      checkoutPage.btnCheckout().click();
      checkoutPage.isCheckoutPageStepOne();
      checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
      checkoutPage.inputLastName().type(checkoutPage.textLastName);
      checkoutPage.btnContinue().click();
      checkoutPage.inputPostalCodeRequired();
    });
    it('Should be able to view the product name on the checkout complete page, same as the order placed on the products page', () => {
      loginPage.login();
      cartPage.nameProduct().then(nameProductPage => {
        cartPage.addCart();
        cartPage.cart();
        checkoutPage.btnCheckout().click();
        checkoutPage.isCheckoutPageStepOne();
        checkoutPage.inputFirstName().type(checkoutPage.textFirstName);
        checkoutPage.inputLastName().type(checkoutPage.textLastName);
        checkoutPage.inputPostalCode().type(checkoutPage.textPostalCode);
        checkoutPage.btnContinue().click();
        checkoutPage.isCheckoutPageStepTwo();
        checkoutPage
          .nameProductInCheckoutCompletePage()
          .then(nameCheckoutCompletePage => {
            expect(nameProductPage.text()).equal(
              nameCheckoutCompletePage.text()
            );
          });
      });
    });
  });
});
