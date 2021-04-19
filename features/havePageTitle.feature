Feature: havePageTitle

having a title for the home page  

Scenario: home page title
Given I am on the page "https://www.algoan.com/"
Then the "h1" of the page should be "Credit decisioning as a Service"

