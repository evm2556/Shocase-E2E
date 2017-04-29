module.exports = {
    'test offutt images': function (browser) {
        browser
            .url('http://cs.gmu.edu/~offutt/index.html')
            //.waitForElementVisible('img[alt*="Jeff\'s picture"]', 1000)
            .click('img[alt*="Jeff\'s picture"]')
            //.waitForElementVisible('img[alt*="1997"]', 1000)
            .click('img[alt*="1997"]')
            .pause(3000)
            .end();
    }
};