Feature: Login feature

    As a user
    I want to login to Internet heroku app

    # Background: pre-cond/open browser
    #     Given I open browser

    Background: pre-cond/open browser
        Given I open the website
    #When I login as a user

    @login
    Scenario: check valid login
        When I type username
        And I type password
        And I click login button
        Then I should successfully login

# @smoketest
# Scenario: fill the form
#     When I fill form
#     And I click login button
#     Then I should successfully login

# @focus @smoke @regression
# Scenario: check Invalid login
#     When I enter username args "testinvalidlogin"
#     And I enter password "uswdhuisdhh"
#     And I click login button
#     Then I should see "Your username is invalid!" text displayed

# Scenario Outline: test the login feature with multiple sets of data
#     When I enter username args "<username>"
#     And I enter password "<password>"
#     And I click login button
#     Then I should see "Your username is invalid!" text displayed

#     Examples:
#         | username  | password    |
#         | abcd      | 43434343    |
#         | abcd      | ABcd3232@@# |
#         | abcd123   | afdfdfdf    |
#         | 12123abcd | 4343434sdsd |
#         | $^%%%%^   | afdfdfdf    |
#         | HHJ*&*&   | 4343434sdsd |


# @datatable @regression
# Scenario: check valid login using datatable
#     When I enter datatable username and password
#         | UN       | PW                   |
#         | tomsmith | SuperSecretPassword! |
#     Then I should successfully login


# Scenario: test Scenario
#     When I enter some data
#     Then I should see data visible


