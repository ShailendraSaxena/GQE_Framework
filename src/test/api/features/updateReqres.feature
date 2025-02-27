Feature: Create and Update User Data Put Request
    
  Scenario: Create and Update the user data and verify the details
    Given a new API request context is being created
    When I create a new user using POJO
    Then the response should contain user ID
    And the response should also contain the user details
    When I update user job detail to "IT Employee"
    Then the update response status should be 200
    And the response status text should be "OK"
    And the response should contain the updated user details