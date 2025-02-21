const { Builder, By, until } = require('selenium-webdriver');
const edge = require('selenium-webdriver/edge');
const { expect } = require('chai');

describe('ESPN Homepage Test', function () {
    this.timeout(30000); // Increase timeout
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

    it('Ensures homepage loads within 4 seconds ', async function () {
        const start = performance.now();
        await driver.get('https://www.espn.com');
        await driver.wait(until.elementLocated(By.css('img')), 15000);
        const end = performance.now();
        const time = end - start; 
        expect(time).to.be.lessThan(4000, `Page load time was ${time} ms`);
        const title = await driver.getTitle();
        expect(title).to.include('ESPN');
    });
});


