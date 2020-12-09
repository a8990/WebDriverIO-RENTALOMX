const assert = require('assert')
//const { addFeature } = require('@wdio/allure-reporter').default

describe('webdriver.io page', () => {
    it('should have the right title', () => {
        browser.url('https://rentalo.com.mx')
        const title = browser.getTitle()
        assert.strictEqual(title, 'Rentalo')
        //allureReporter.addFeature('Feature')
    })
})
