import { Given, When, Then } from '@cucumber/cucumber';
import { expect, request } from '@playwright/test';
// import { response } from './shared.steps';
let response;

Given('the server is running', async function () {
  // No action needed, server is already running
});

When('I request the list of courses', async function () {
  const apiContext = await request.newContext();
  response = await apiContext.get('http://localhost:3000/api/courses');
});

When('I request the course with ID {int}', async function (id) {
  const apiContext = await request.newContext();
  response = await apiContext.get(`http://localhost:3000/api/courses/${id}`);
});

Then('I should get a {int} status code', function (statusCode) {
  expect(response.status()).toBe(statusCode);
});

When('I create a course with name {string}', async function (name) {
  const apiContext = await request.newContext();
  response = await apiContext.post('http://localhost:3000/api/courses', {
    data: { name },
  });
});

Then('the response should contain the list of courses', async function () {
  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

Then('the response should contain the course with ID {int}', async function (id) {
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('id', id);
});

Then('the response should contain the new course', async function () {
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('name', 'Course4');
});

export { response };