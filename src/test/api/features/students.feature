Feature: Students API

  Scenario: Get all students
    Given the server is running
    When I request the list of students
    Then I should get a 200 status code
    And the response should contain the list of students

  Scenario: Get a student by ID
    Given the server is running
    When I request the student with ID 1
    Then I should get a 200 status code
    And the response should contain the student with ID 1

  Scenario: Create a new student
    Given the server is running
    When I create a student with name "Student4"
    Then I should get a 200 status code
    And the response should contain the new student