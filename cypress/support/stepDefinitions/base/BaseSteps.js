import { Before, After } from '@badeball/cypress-cucumber-preprocessor';

Before(() => {
  cy.log('Executes before each test scenario');
  cy.clearLocalStorage();
});

Before({ tags: '@smoke' }, () => {
  cy.log('Executes Smoke tests');
});

After(() => {
  cy.log('Executes after each test scenario');
});
