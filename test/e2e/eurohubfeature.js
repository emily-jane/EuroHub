describe('Euro Hub', function() {
  it('has a title', function() {
    browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('EuroHub');
  });

  it('searches for people', function() {
    element(by.cssContainingText('option', 'People')).click();
    element(by.model('searchTerm')).sendKeys('Jones');
    element(by.className('fa-search')).click();

    expect(element(by.className('header')).getText()).
        toEqual('Alexander Jones');

  });

  it('searches for documents', function() {
    element(by.cssContainingText('option', 'Documents')).click();
    element(by.model('searchTerm')).sendKeys('health');
    element(by.className('fa-search')).click();

    expect(element(by.className('header')).getText()).
        toEqual('Health and Safety policy');

  });
})
