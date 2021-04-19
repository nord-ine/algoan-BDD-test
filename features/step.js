
const { Given, Then } = require("@cucumber/cucumber");
const puppeteer = require('puppeteer');
const assert = require("assert").strict;

Given('I am on the page {string}', async function (string) {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    this.browser = browser
    this.page = page
    await this.page.goto(string);
});

Then('the {string} of the page should be {string}', async function (string, string2) {
    h1Text =  await this.page.$eval('H1', e => e.textContent);
    await this.browser.close();
    return assert.equal(h1Text, string2);;
});
