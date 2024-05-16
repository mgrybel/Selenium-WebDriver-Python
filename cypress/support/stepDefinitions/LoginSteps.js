/// <reference types="cypress-xpath" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = 'http://localhost:3000';

Given('I access the E-commerce Website login page', () => {
  cy.visit(baseUrl + '/login');
});

When('I enter an email', () => {
  cy.get('#email').type('customer@test.com');
});

When('I enter a valid password', () => {
  cy.get('#password').type('test123');
});

When('I enter an ivalid password', () => {
  cy.get('#password').type('pass123');
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
