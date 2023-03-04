@UI
Feature: Insurance Broker System Application

    @Login
    Scenario: User login should fail for invalid login credentials
        Given User launches Insurance Broker System Application
        When User enter valid email and invalid password
        And User clicks on Login Button
        Then User should be presented with login error message

    @Login
    Scenario: User login should succeed for valid login credentials
        Given User launches Insurance Broker System Application
        When User enter valid email and valid password
        And User clicks on Login Button
        Then User login succeeds and user is on the account page