const puppeteer = require('puppeteer');
const PDFDocument = require('pdfkit');
const fs = require('fs');

const services = {
    navigate: async function (req, res) {
        try {
            const username = process.argv.slice(2)[0] || 'development0261@gmail.com';
            const password = process.argv.slice(2)[1] || 'Logix@123';

            // Create object of PDFDocument and set the pdf file name to output.pdf
            const doc = new PDFDocument;
            doc.pipe(fs.createWriteStream('output.pdf'))

            // Launch site as headless through puppeteer
            // Keep headless: false if you want to see the visualization
            const browser = await puppeteer.launch({ headless: false, defaultViewport: null });
            const page = await browser.newPage();
            const navigationPromise = page.waitForNavigation() // Waits for page/element to finish loading

            // Site URL
            await page.goto('https://next.xlscout.ai/')

            // Login page to enter user and password
            await page.waitForSelector('#username')
            await page.click('#username')

            await page.type('#username', username)

            await page.waitForSelector('#password')
            await page.click('#password')

            await page.type('#password', password)

            await navigationPromise

            // Clicks on login button
            await page.waitForSelector('#kc-login')
            await page.click('#kc-login')

            await navigationPromise

            // Clicks on run module button located on dashboard
            await page.waitForSelector('.introduction > .introduction__modules-list > .introduction__module-item:nth-child(3) > .introduction__module-link > span')
            await page.click('.introduction > .introduction__modules-list > .introduction__module-item:nth-child(3) > .introduction__module-link > span')
            await navigationPromise

            // Clicks on "Edit Search" button to type custom query
            await navigationPromise
            await page.waitForSelector('.code-wrapper > .code-wrapper__buttons > .code-wrapper__edit-buttons > .code-wrapper__edit-search > span')
            await page.click('.code-wrapper > .code-wrapper__buttons > .code-wrapper__edit-buttons > .code-wrapper__edit-search > span')
            await navigationPromise

            // Type custom query in text area
            await navigationPromise
            await page.waitForSelector('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen')
            await page.click('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen')
            await page.type('.home__search-settings > .advanced-search > .code-wrapper > .code-wrapper__code-scroll > .code-wrapper__screen', '(pd: [20210801 TO 20210901])')

            // Clicks on Search button
            await navigationPromise
            await page.waitForSelector('.advanced-search > .code-wrapper > .code-wrapper__buttons > .code-wrapper__search-buttons > .code-wrapper__search')
            await page.click('.advanced-search > .code-wrapper > .code-wrapper__buttons > .code-wrapper__search-buttons > .code-wrapper__search')
            await navigationPromise
            await sleep(2000);

            // Clicks on Analyze button
            await navigationPromise
            await page.waitForSelector('body > #app > .footer__additional-result-panel > .footer__central-buttons > .footer__central-button--analyze')
            await page.click('body > #app > .footer__additional-result-panel > .footer__central-buttons > .footer__central-button--analyze')
            await navigationPromise
            await sleep(2000);

            // Take Lauch Dashboard button element
            await navigationPromise
            await page.waitForSelector('.analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button > span')
            await page.click('.analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button > span')
            await navigationPromise
            await sleep(2000);

            // Clicks Lauch Dashboard button element
            await navigationPromise
            await page.waitForSelector('.analyze > .analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button')
            await page.click('.analyze > .analyze__dashboards-list > li:nth-child(2) > .analyze__board-buttons > .analyze__launch-button')
            await navigationPromise
            await sleep(2000);

            // This will set viewport screen size to take snapshot
            await navigationPromise
            await page.setViewport({ width: 1450, height: 1400, isLandScape: true, deviceScalarFactor: 0 })

            // Profile Summary graph screen
            await navigationPromise
            await page.waitForSelector('#exportable-part');

            // Take canvas section which contains graph and take screenshot
            await navigationPromise
            const portfolio_summary = await page.$('#exportable-part');
            sleep(2000);
            await portfolio_summary.screenshot({ path: 'portfolio_summary.png' });

            // Store image into pdf page
            doc.text(`Portfolio Summary`, {
                width: 410,
                align: 'left'
            }).image('./portfolio_summary.png', {
                fit: [500, 500],
                align: 'center',
                valign: 'center'
            });

            // Remove image file
            fs.unlink("portfolio_summary.png", (() => { }));

            await navigationPromise

            // Clicks on Patent trend
            await page.waitForSelector('li[id="company.Portfoliooverview.PatentTrend.name"]');
            await page.click('li[id="company.Portfoliooverview.PatentTrend.name"]');

            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > div > .echarts > div > canvas')

            const patent_trend_application_year = await page.$('.dashboards-wrapper > div > .echarts > div > canvas')
            await navigationPromise
            await patent_trend_application_year.screenshot({ path: 'patent_trend_application_year.png' });
            sleep(2000);

            // Take screenshot, add it in pdf page and remove image file
            doc.addPage()
                .text(`Patent Trend - Application Year`, {
                    width: 410,
                    align: 'left'
                }).image('./patent_trend_application_year.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./patent_trend_application_year.png', (() => { }));

            // Clicks on each radio button
            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
            await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')

            // await sleep(2000);

            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > div > .echarts > div > canvas')
            const patent_trend_application_country = await page.$('.dashboards-wrapper > div > .echarts > div > canvas')
            await navigationPromise
            await patent_trend_application_country.screenshot({ path: 'patent_trend_application_country.png' });
            sleep(2000);

            // Take screenshot, add it in pdf page and remove image file
            doc.addPage()
                .text(`Patent Trend - Application Country`, {
                    width: 410,
                    align: 'left'
                }).image('./patent_trend_application_country.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./patent_trend_application_country.png', (() => { }));

            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
            await sleep(2000);
            await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(3) > .checkmark')
            await navigationPromise

            await page.waitForSelector('.dashboards-wrapper > div > .echarts > div > canvas')
            const patent_trend_IPC_classification = await page.$('.dashboards-wrapper > div > .echarts > div > canvas')

            await navigationPromise
            await patent_trend_IPC_classification.screenshot({ path: 'patent_trend_IPC_classification.png' });

            sleep(2000);

            // Take screenshot, add it in pdf page and remove image file
            doc.addPage()
                .text(`Patent Trend - IPC Classification`, {
                    width: 410,
                    align: 'left'
                }).image('./patent_trend_IPC_classification.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./patent_trend_IPC_classification.png', (() => { }));

            // Clicks on Teachnolody breakdown
            await navigationPromise
            await page.waitForSelector('li[id="company.Portfoliooverview.TechnologyBreakdown.name"]')
            await page.click('li[id="company.Portfoliooverview.TechnologyBreakdown.name"]')

            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
            await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
            await navigationPromise

            await page.waitForSelector('#visualizationManual')
            await page.click('#visualizationManual')

            const manual_taxonomy = await page.$('#visualizationManual')
            await navigationPromise

            await manual_taxonomy.screenshot({ path: 'manual_taxonomy.png' });

            sleep(2000);

            doc.addPage()
                .text(`Technolody Breakdown - Manual Taxonomy`, {
                    width: 410,
                    align: 'left'
                }).image('./manual_taxonomy.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./manual_taxonomy.png', (() => { }));

            // Clicks on each radio option

            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
            await page.click('.dashboards-wrapper > div > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
            await navigationPromise

            await page.waitForSelector('div > div > #visualizationAutomated > div > canvas:nth-child(3)')
            await page.click('div > div > #visualizationAutomated > div > canvas:nth-child(3)')

            const automated_concepts = await page.$('div > div > #visualizationAutomated > div > canvas:nth-child(3)')
            await sleep(2000);
            await navigationPromise
            await automated_concepts.screenshot({ path: 'automated_concepts.png' });

            sleep(2000);

            doc.addPage()
                .text(`Technolody Breakdown - Automated Concepts`, {
                    width: 410,
                    align: 'left'
                }).image('./automated_concepts.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./automated_concepts.png', (() => { }));

            // Expands Emerging technologies menu item
            await navigationPromise
            await page.waitForSelector('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(2) > .expandable-item__button')
            await page.click('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(2) > .expandable-item__button')

            // Clicks on Technology Timeline Trend
            await navigationPromise
            await page.waitForSelector('li[id="company.EmergingTechnologies.Technologytimelinetrend.name"]')
            await page.click('li[id="company.EmergingTechnologies.Technologytimelinetrend.name"]')

            await navigationPromise
            await page.waitForSelector('g:nth-child(1) > g > g > g > rect')
            await sleep(2000);
            const technology_timeline_trend = await page.$('g:nth-child(1) > g > g > g > rect')
            await navigationPromise
            await technology_timeline_trend.screenshot({ path: 'technology_timeline_trend.png' });

            sleep(2000);

            doc.addPage()
                .text(`Technology Timeline Trend`, {
                    width: 410,
                    align: 'left'
                }).image('./technology_timeline_trend.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./technology_timeline_trend.png', (() => { }));

            // Expands Collaborations menu item
            await navigationPromise
            await page.waitForSelector('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(3) > .expandable-item__button')
            await page.click('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(3) > .expandable-item__button')

            // Clicks on Partners 
            await navigationPromise
            await page.waitForSelector('li[id="company.Co-Development.Partners(Coassigness).name"]')
            await page.click('li[id="company.Co-Development.Partners(Coassigness).name"]')
            // await sleep(2000);

            await navigationPromise
            await page.waitForSelector('.amchart:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) rect:nth-child(1)')
            await sleep(2000);
            const partners = await page.$('.amchart:nth-child(1) > div:nth-child(1) > svg:nth-child(1) > g:nth-child(2) > g:nth-child(2) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) > g:nth-child(1) rect:nth-child(1)')
            await navigationPromise
            await partners.screenshot({ path: 'partners.png' });
            sleep(2000);

            doc.addPage()
                .text(`Partners`, {
                    width: 410,
                    align: 'left'
                }).image('./partners.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./partners.png', (() => { }));

            // Expands Core invention menu item
            await navigationPromise
            await page.waitForSelector('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(4) > .expandable-item__button')
            await page.click('.common-sidebar > .common-sidebar__inner > .graph-menu__graph-list > .expandable-item:nth-child(4) > .expandable-item__button')
            await sleep(2000);

            // Clicks on core publications
            await navigationPromise
            await page.waitForSelector('li[id="company.CoreInventions.CorePublications.name"]')
            await page.click('li[id="company.CoreInventions.CorePublications.name"]')
            await sleep(2000);

            await navigationPromise
            await page.waitForSelector('#exportable-part > .analyze__stacked-column-chart-wrapper > .echarts > div > canvas')
            await sleep(2000);
            const top_10 = await page.$('#exportable-part > .analyze__stacked-column-chart-wrapper > .echarts > div > canvas')
            await navigationPromise
            await top_10.screenshot({ path: 'top_10.png' });

            sleep(2000);

            doc.addPage()
                .text(`Core Publications - Top 10`, {
                    width: 410,
                    align: 'left'
                }).image('./top_10.png', {
                    fit: [500, 500],
                    align: 'center',
                    valign: 'center'
                });
            fs.unlink('./top_10.png', (() => { }));

            await navigationPromise
            await page.waitForSelector('.dashboards-wrapper > #exportable-part > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')
            await page.click('.dashboards-wrapper > #exportable-part > .analyze__radio-buttons > .analyze__radio:nth-child(2) > .checkmark')

            await navigationPromise
            await page.waitForSelector('#exportable-part > .analyze__stacked-column-chart-wrapper > .echarts > div > canvas')
            await sleep(2000);
            const top_20 = await page.$('#exportable-part > .analyze__stacked-column-chart-wrapper > .echarts > div > canvas')
            await navigationPromise
            await top_20.screenshot({ path: 'top_20.png' });

            sleep(2000);

            doc.addPage()
                .text(`Core Publications - Top 20`, {
                    width: 410,
                    align: 'left'
                }).image('./top_20.png', {
                    fit: [600, 500],
                    align: 'center',
                    valign: 'center'
                });

            fs.unlink('./top_20.png', (() => { }));

            // Finish document and close the browser
            doc.end()
            await browser.close();

            function sleep(ms) {
                return new Promise(resolve => setTimeout(resolve, ms));
            }
        } catch (err) {
            throw err;
        }
    }
}

module.exports = services;