describe('click around offutt site', function () {
    beforeEach(function () {
        return browser.ignoreSynchronization = true;
    });

    it('should have links for schedules and syllabus', function () {
        browser.get('http://cs.gmu.edu/~offutt/');
        //browser.wait(ExpectedConditions.visibilityOf(element(by.linkText('737'))));
        element(by.linkText('737')).click();
        //browser.wait(ExpectedConditions.visibilityOf(element(by.linkText('Schedule'))));
        element(by.linkText('Schedule')).click();
        //browser.wait(ExpectedConditions.visibilityOf(element(by.linkText('Syllabus'))));
        element(by.linkText('Syllabus')).click();
        browser.sleep(2000);
    });
});