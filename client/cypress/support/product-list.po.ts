

export class ProductListPage {
  navigateTo() {
    return cy.visit('/products');
  }

getProductListItems() {
  return cy.get('.product-nav-list .product-list-item');
}

clickViewProductOnFirst() {
  return cy.find('.product-list-item').first().click();
}

// This isn't going to be used quite yet, since there is no add-product button at the moment
addProductButton() {
  return cy.get('[data-test=addProductButton]');
}
}
