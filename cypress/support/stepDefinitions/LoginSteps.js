import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPO from '../pageObjects/LoginPO';

const loginPage = new LoginPO();

Given('I access the E-commerce Website login page', () => {
  loginPage.navigateToLoginPage();
});

When('I enter an email {string}', (email) => {
  loginPage.typeEmail(email);
});

When('I enter a password {}', (password) => {
  loginPage.typePassword(password);
});

When('I click on the Login button', () => {
  loginPage.clickOnLoginButton();
});

Then('I should be presented with the Account button in the navbar', () => {
  loginPage.getAccountButton().should('be.visible');
});

Then(
  'I should be presented with the invalid login credentials error message',
  () => {
    loginPage
      .getErrorMessage()
      .should('have.text', 'Invalid email or password');
  }
);
