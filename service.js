const puppeteer = require('puppeteer');

const services = {
    navigate: async function (req, res) {
        console.log('<--- navigate ---> ')
        const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation()

        await page.goto('https://next.xlscout.ai/')

        await page.waitForSelector('#username')
        await page.click('#username')

        await page.type('#username', 'development0261@gmail.com')

        await page.waitForSelector('#password')
        await page.click('#password')

        await page.type('#password', 'Logix@123')

        await navigationPromise

        await page.waitForSelector('#kc-login')
        await page.click('#kc-login')

        await navigationPromise

        await page.waitForSelector('.introduction > .introduction__modules-list > .introduction__module-item:nth-child(3) > .introduction__module-link > span')
        await page.click('.introduction > .introduction__modules-list > .introduction__module-item:nth-child(3) > .introduction__module-link > span')
        await navigationPromise

        await sleep(2000);

        await page.waitForSelector('.code-wrapper > .code-wrapper__buttons > .code-wrapper__edit-buttons > .code-wrapper__edit-search > span')
        await page.click('.code-wrapper > .code-wrapper__buttons > .code-wrapper__edit-buttons > .code-wrapper__edit-search > span')
        await navigationPromise
        await sleep(2000);
        await navigationPromise
        await page.waitForSelector('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen')
        await page.click('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen')
        await page.type('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen', '(pd: [20210801 TO 20210901])')
        await sleep(2000);
        await navigationPromise
        await page.waitForSelector('.advanced-search > .code-wrapper > .code-wrapper__buttons > .code-wrapper__search-buttons > .code-wrapper__search')
        await page.click('.advanced-search > .code-wrapper > .code-wrapper__buttons > .code-wrapper__search-buttons > .code-wrapper__search')
        await navigationPromise
        await sleep(2000);
        await navigationPromise
        await page.waitForSelector('body > #app > .footer__additional-result-panel > .footer__central-buttons > .footer__central-button--analyze')
        await page.click('body > #app > .footer__additional-result-panel > .footer__central-buttons > .footer__central-button--analyze')
        await navigationPromise
        await sleep(2000);
        await navigationPromise
        await page.waitForSelector('.analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button > span')
        await page.click('.analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button > span')
        await navigationPromise
        await sleep(2000);
        await navigationPromise
        await page.waitForSelector('.analyze > .analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button')
        await page.click('.analyze > .analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button')
        await navigationPromise
        await sleep(2000);
        await navigationPromise
        await page.setViewport({ width: 1450, height: 1400, isLandScape: true, deviceScalarFactor: 0 })

        // graph screen
        await navigationPromise
        await sleep(2000);
        await page.waitForSelector('#exportable-part');
        // await page.click('#exportable-part > .echarts > canvas');

        const logo = await page.$('#exportable-part');
        await logo.screenshot({ path: '1450_1400.png' });

        // const graph = await page.waitForSelector('div > #exportable-part')
        // await page.click('div > #exportable-part > .echarts > div > canvas')
        // await navigationPromise

        // await sleep(5000);

        // await graph.screenshot({ path: 'graph.png' });
        // await sleep(5000);
        await navigationPromise


        // patent trend click

        await page.waitForSelector('li[id="company.Portfoliooverview.PatentTrend.name"]');
        await page.click('li[id="company.Portfoliooverview.PatentTrend.name"]');

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .echarts > div > canvas')
        await page.click('.dashboards-wrapper > div > .echarts > div > canvas')

        await sleep(5000);

        await navigationPromise
        await page.screenshot({ path: 'patent_trend_application_year.png' });

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')

        await sleep(5000);

        await navigationPromise
        await page.screenshot({ path: 'patent_trend_application_country.png' });

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .echarts > div > canvas')
        await page.click('.dashboards-wrapper > div > .echarts > div > canvas')

        await sleep(5000);

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')

        await sleep(5000);

        await navigationPromise
        await page.screenshot({ path: 'patent_trend_IPC_classification.png' });

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .echarts > div > canvas')
        await page.click('.dashboards-wrapper > div > .echarts > div > canvas');

        await sleep(5000);

        await navigationPromise
        await page.waitForSelector('.graph-menu__inner-list > #company.Portfoliooverview.PatentTrend.name');
        await page.click('.graph-menu__inner-list > #company.Portfoliooverview.PatentTrend.name');
        await sleep(5000);

        await navigationPromise
        await page.waitForSelector('.graph-menu__inner-list-item graph-menu__inner-list-item--active');
        await page.click('.graph-menu__inner-list-item graph-menu__inner-list-item--active');
        await sleep(5000);

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await sleep(5000);

        await navigationPromise
        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
        await sleep(5000);

        await browser.close();

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
    }
}

module.exports = services;