import BasePO from './base/BasePO';

class LoginPO extends BasePO {
  navigateToLoginPage() {
    super.navigate('/login');

    // navigate to Home page
    // super.navigate('');
  }

  typeEmail(email) {
    cy.get('#email').type(email);
  }

  typePassword(password) {
    cy.get('#password').type(password);
  }

  clickOnLoginButton() {
    cy.xpath('//button[text()="Login"]').click();
  }

  getAccountButton() {
    return cy.xpath('//button[text()="Account"]');
  }

  getErrorMessage() {
    return cy.xpath('//p[contains(@class, "text-danger text-center")]');
  }
}

export default LoginPO;
