export class ProductsPage {
  selectProductSortByNameAZ() {
    cy.get('[data-test="product_sort_container"]').select('az');
    cy.get('.active_option').should('have.text', 'Name (A to Z)');
  }

  selectProductSortByNameZA() {
    cy.get('[data-test="product_sort_container"]').select('za');
    cy.get('.active_option').should('have.text', 'Name (Z to A)');
  }

  selectProductSortByPriceHighToLow() {
    cy.get('[data-test="product_sort_container"]').select('hilo');
    cy.get('.active_option').should('have.text', 'Price (high to low)');
  }

  selectProductSortByPriceLowToHigh() {
    cy.get('[data-test="product_sort_container"]').select('lohi');
    cy.get('.active_option').should('have.text', 'Price (low to high)');
  }
}
