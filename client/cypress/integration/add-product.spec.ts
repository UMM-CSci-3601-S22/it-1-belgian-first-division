import { Product } from 'src/app/products/product';
import { AddProductPage } from '../support/add-product.po';

describe('Add product', () => {
  const page = new AddProductPage();

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should have the correct title', () => {
    page.getTitle().should('have.text', 'New Product');
  });

  it('Should enable and disable the add product button', () => {
    // ADD PRODUCT button should be disabled until all the necessary fields
    // are filled. Once the last (`#emailField`) is filled, then the button should
    // become enabled.
    page.addProductButton().should('be.disabled');
    page.getFormField('name').type('test');
    page.addProductButton().should('be.disabled');
    page.getFormField('description').type('Some fun description of a product');
    page.addProductButton().should('be.disabled');
    page.getFormField('brand').type('potatoBrand');
    page.addProductButton().should('be.disabled');
    page.getFormField('category').type('fruit');
    page.getFormField('')
    // all the required fields have valid input, then it should be enabled
    page.addProductButton().should('be.enabled');
  });

});
