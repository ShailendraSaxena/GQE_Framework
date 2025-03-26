Feature: Courses API

  Scenario: Get all courses
    Given the server is running
    When I request the list of courses
    Then I should get a 200 status code
    And the response should contain the list of courses

  Scenario: Get a course by ID
    Given the server is running
    When I request the course with ID 1
    Then I should get a 200 status code
    And the response should contain the course with ID 1

  Scenario: Create a new course
    Given the server is running
    When I create a course with name "Course4"
    Then I should get a 200 status code
    And the response should contain the new course