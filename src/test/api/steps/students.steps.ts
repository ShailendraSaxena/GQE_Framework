import { When, Then } from '@cucumber/cucumber';
import { expect, request } from '@playwright/test';
// import { response } from './shared.steps';
let response;

When('I request the list of students', async function () {
  const apiContext = await request.newContext();
  response = await apiContext.get('http://localhost:3000/api/students');
});

When('I request the student with ID {int}', async function (id) {
  const apiContext = await request.newContext();
  response = await apiContext.get(`http://localhost:3000/api/students/${id}`);
});

When('I create a student with name {string}', async function (name) {
  const apiContext = await request.newContext();
  response = await apiContext.post('http://localhost:3000/api/students', {
    data: { name },
  });
});

// Then('I should get a {int} status code', function (statusCode) {
//   expect(response.status()).toBe(statusCode);
// });

Then('the response should contain the list of students', async function () {
  const responseBody = await response.json();
  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);
});

Then('the response should contain the student with ID {int}', async function (id) {
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('id', id);
});

Then('the response should contain the new student', async function () {
  const responseBody = await response.json();
  expect(responseBody).toHaveProperty('name', 'Course4');
});

export { response };