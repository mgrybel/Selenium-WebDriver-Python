Feature: E-commerce Website - Login Page

  Scenario: Validate Unsuccessful Login
    Given I access the E-commerce Website login page
    When I enter an email
    And I enter an ivalid password
    And I click on the Login button
    Then I should be presented with the invalid login credentials error message

  Scenario: Validate Successful Login
    Given I access the E-commerce Website login page
    When I enter an email
    And I enter a valid password
    And I click on the Login button
    Then I should be presented with the Account button in the navbar