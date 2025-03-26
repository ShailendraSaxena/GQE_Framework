const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { request } = require('playwright');

module.exports = { Given, When, Then, expect, request };