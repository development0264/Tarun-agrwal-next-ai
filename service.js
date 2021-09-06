const puppeteer = require('puppeteer');

const services = {
    navigate: async function (req, res) {
        console.log('<--- navigate ---> ')
        const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
        const page = await browser.newPage();
        const navigationPromise = page.waitForNavigation()
        // await page.goto('https://next.xlscout.ai/');


        await page.goto('https://next.xlscout.ai/')

        // await page.setViewport({ width: 1300, height: 1000 })

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

        console.log('1waiting...')

        await page.screenshot({ path: '0.png' });


        // await page.setViewport({ width: 1300, height: 1000 })
        await navigationPromise

        await page.waitForSelector('.introduction > .introduction__modules-list > .introduction__module-item:nth-child(3) > .introduction__module-link > span')
        await page.click('.introduction > .introduction__modules-list > .introduction__module-item:nth-child(3) > .introduction__module-link > span')
        await navigationPromise


        await sleep(5000);
        console.log('2waiting...')

        await page.screenshot({ path: '00.png' });

        await page.waitForSelector('.code-wrapper > .code-wrapper__buttons > .code-wrapper__edit-buttons > .code-wrapper__edit-search > span')
        await page.click('.code-wrapper > .code-wrapper__buttons > .code-wrapper__edit-buttons > .code-wrapper__edit-search > span')
        await navigationPromise

        // await sleep(5000);
        await page.screenshot({ path: '01.png' });

        await page.waitForSelector('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen')
        await page.click('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen')
        await page.type('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen', '(pd: [20210801 TO 20210901])')
        // await sleep(5000);
        console.log('3waiting...')


        console.log('4wait is over.')
        await navigationPromise

        await page.screenshot({ path: '02.png' });
        // await sleep(5000);
        await page.waitForSelector('.advanced-search > .code-wrapper > .code-wrapper__buttons > .code-wrapper__search-buttons > .code-wrapper__search')
        await page.click('.advanced-search > .code-wrapper > .code-wrapper__buttons > .code-wrapper__search-buttons > .code-wrapper__search')
        await navigationPromise

        await page.screenshot({ path: '3.png' });
        // await sleep(5000);

        // await page.setViewport({ width: 1300, height: 1000 })
        await page.screenshot({ path: '4.png' });
        await navigationPromise


        await page.waitForSelector('body > #app > .footer__additional-result-panel > .footer__central-buttons > .footer__central-button--analyze')
        await page.click('body > #app > .footer__additional-result-panel > .footer__central-buttons > .footer__central-button--analyze')
        await page.screenshot({ path: '5.png' });
        await navigationPromise

        await page.waitForSelector('.analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button > span')
        await page.click('.analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button > span')
        await page.screenshot({ path: '6.png' });
        await navigationPromise

        // await page.setViewport({ width: 1300, height: 1000 })

        await page.waitForSelector('.analyze > .analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button')
        await page.click('.analyze > .analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button')
        await navigationPromise

        await page.screenshot({ path: '7.png' });
        await navigationPromise

        await page.setViewport({ width: 1100, height: 1100 })


        // graph screen
        await navigationPromise

        await page.waitForSelector('#exportable-part');

        const logo = await page.$('#exportable-part');
        await logo.screenshot({
            path: '2449_1700.png'
        });

        // const graph = await page.waitForSelector('div > #exportable-part')
        // // await page.click('div > #exportable-part > .echarts > div > canvas')
        // // await navigationPromise

        // // await sleep(5000);

        // await graph.screenshot({ path: 'graph.png' });
        await sleep(5000);

        await page.waitForSelector('#company.Portfoliooverview.PatentTrend.name')
        await page.click('#company.Portfoliooverview.PatentTrend.name')
        await navigationPromise

        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await navigationPromise

        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
        await navigationPromise

        await page.waitForSelector('#company.Portfoliooverview.TechnologyBreakdown.name')
        await page.click('#company.Portfoliooverview.TechnologyBreakdown.name')
        await navigationPromise

        await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await navigationPromise

        await page.waitForSelector('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(2) > .expandable-item__button')
        await page.click('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(2) > .expandable-item__button')
        await navigationPromise

        await page.waitForSelector('#company.EmergingTechnologies.Technologytimelinetrend.name')
        await page.click('#company.EmergingTechnologies.Technologytimelinetrend.name')
        await navigationPromise

        await page.waitForSelector('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(3) > .expandable-item__button')
        await page.click('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(3) > .expandable-item__button')
        await navigationPromise

        await page.waitForSelector('#company.Co-Development.Partners(Coassigness).name')
        await page.click('#company.Co-Development.Partners(Coassigness).name')
        await navigationPromise

        await page.waitForSelector('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(4) > .expandable-item__button')
        await page.click('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(4) > .expandable-item__button')
        await navigationPromise

        await page.waitForSelector('#company.CoreInventions.CorePublications.name')
        await page.click('#company.CoreInventions.CorePublications.name')
        await navigationPromise

        await page.waitForSelector('.dashboards-wrapper > #exportable-part > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await page.click('.dashboards-wrapper > #exportable-part > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
        await navigationPromise

        // await browser.close()


        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }

    }
}

module.exports = services;