import {Given, When, Then ,Before, After } from '@cucumber/cucumber';
import { expect, APIRequestContext, APIResponse, request } from '@playwright/test';
import { Reqres } from '../../../../data/Reqres';
//import { Users } from '../../../../data/Users';

let requestContext: APIRequestContext;
let apiPostResponse: APIResponse;
let apiPUTResponse: APIResponse;
let userId: string;
let user: User;
let reqres: Reqres;    

interface User {
    name: string;
    job: string;
  }

  
Given('a new API request context is being created', async () => {
   requestContext = await request.newContext();
});

When('I create a new user using POJO', async () => {
  user = {
    name: 'morpheus',
    job: 'leader'
  };

  apiPostResponse = await requestContext.post('https://reqres.in/api/users', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: user
  });
});

Then('the response should contain user ID', async () => {
  const postJsonResponse = await apiPostResponse.json();
  userId = postJsonResponse.id;
  expect(userId).toBeDefined();
  expect(userId).not.toBeNull();
  expect(postJsonResponse.createdAt).toBeDefined();
});

Then('the response should also contain the user details', async () => {
  const responseText = await apiPostResponse.text();
  const actPostUser: User  = JSON.parse(responseText);

  expect(actPostUser.name).toBe(user.name);
  expect(actPostUser.job).toBe(user.job);
});

When('I update user job detail to {string}', async (newJob: string) => {
    user.job = newJob;

    apiPUTResponse = await requestContext.put('https://reqres.in/api/users/2', {
    headers: {
      'Content-Type': 'application/json',
    },
    data: user
  });
});

Then('the update response status should be {int}', async (statusCode: number) => {
  expect(apiPUTResponse.status()).toBe(statusCode);
});

Then('the response status text should be {string}', async (statusText: string) => {
  expect(apiPUTResponse.statusText()).toBe(statusText);
});

Then('the response should contain the updated user details', async () => {
  const getResponseText = await apiPUTResponse.text();
  const actPutUser: User = JSON.parse(getResponseText);


  expect(actPutUser.job).toBe(user.job);
  expect(actPutUser.name).toBe(user.name);
});