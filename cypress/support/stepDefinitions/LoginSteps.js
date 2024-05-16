/// <reference types="cypress-xpath" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'http://localhost:3000';

Given('I access the E-commerce Website login page', () => {
  cy.visit(baseUrl + '/login');
});

When('I enter an email {string}', (email) => {
  cy.get('#email').type(email);
});

When('I enter a password {string}', (password) => {
  cy.get('#password').type(password);
});

When('I click on the Login button', () => {
  cy.xpath('//button[text()="Login"]').click();
});

Then('I should be presented with the Account button in the navbar', () => {
  cy.xpath('//button[text()="Account"]').should('be.visible');

  // Log out
  cy.get('#btnGroupDrop').click();
  cy.xpath('//a[contains(@href, "logout")]').click();
});

Then(
  'I should be presented with the invalid login credentials error message',
  () => {
    cy.xpath('//p[contains(@class, "text-danger text-center")]').should(
      'have.text',
      'Invalid email or password'
    );
  }
);
