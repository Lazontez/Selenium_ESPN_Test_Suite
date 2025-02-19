const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const { expect } = require('chai');

describe('ESPN Homepage Test', function () {
    let driver;

    before(async function () {
        let options = new edge.Options();
        driver = await new Builder().forBrowser('MicrosoftEdge').setEdgeOptions(options).build();
    });

    after(async function () {
        if (driver) {
            await driver.quit();
        }
    });

    it('should load ESPN homepage', async function () {
        await driver.get('https://www.espn.com');
        const title = await driver.getTitle();
        expect(title).to.include('ESPN');
    });
});

