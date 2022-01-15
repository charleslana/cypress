export class CartPage {
  addCart() {
    this.btnAddToCart().click();
    this.hasACart();
  }

  btnAddToCart() {
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]');
  }

  btnBackProducts() {
    return cy.get('[data-test="continue-shopping"]');
  }

  btnRemoveProductFromCart() {
    return cy.get('[data-test="remove-sauce-labs-backpack"]');
  }

  cart() {
    this.iconCart().click();
    this.isCartPage();
  }

  hasACart() {
    cy.get('.shopping_cart_badge').should('be.visible');
  }

  hasRemoveButton() {
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
  }

  iconCart() {
    return cy.get('.shopping_cart_link');
  }

  isCartPage() {
    cy.url().should('contain', 'cart.html');
  }

  isEmptyCart() {
    cy.get('.shopping_cart_badge').should('not.exist');
  }

  nameProduct() {
    return cy.get('#item_4_title_link > .inventory_item_name');
  }

  nameProductInCartPage() {
    return cy.get('.inventory_item_name');
  }
}
