import {Product} from 'src/app/products/product';

export class AddProductPage {
  navigateTo() {
    return cy.visit('/products/new');
  }

  getTitle() {
    return cy.get('.add-product-title');
  }

  addUserButton() {
    return cy.get('[data-test=confirmAddProductButton]');
  }

  selectMatSelectValue(select: Cypress.Chainable, value: string) {
    return select.click().get(`mat-option[value="${value}"]`).click();
  }

  getFormField(fieldName: string) {
    return cy.get(`mat-form-field [formControlName=${fieldName}]`);
  }

  addProduct(newProduct: Product) {
    this.getFormField('name').type(newProduct.name);
  }
}
