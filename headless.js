const puppeteer = require('puppeteer');

(async() => {
    const browser = await puppeteer.launch({
        headless: false,
        args: [
            '--headless',
            '--hide-scrollbars',
            '--mute-audio'
        ]
    });
    // await console.log("Puppeteer launched");
    const page = await browser.newPage();
    await page.setViewport({
        width: 2560 / 2,
        height: 1600 / 2,
        deviceScaleFactor: 2
    });
    // await console.log(page.viewport());
    await page.goto('http://localhost:8080/?exporting=true');
    // await page.screenshot({ path: 'example.png' });
    // await browser.close();
})();