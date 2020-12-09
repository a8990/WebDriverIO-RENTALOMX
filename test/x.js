const { remote } = require('webdriverio')

;(async () => {
    const browser = await remote({
        logLevel: 'error',
        path: '/', // remove `path` if you decided using something different from driver binaries.
        capabilities: {
            browserName: 'firefox'
        }
    })

    await browser.url('https://webdriver.io')

    const title = await browser.getTitle()
    console.log('Title was: ' + title)

    await browser.deleteSession()
})().catch((e) => console.error(e))