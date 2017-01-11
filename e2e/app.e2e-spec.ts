import { NgpolandWorkshopPage } from './app.po';

describe('ngpoland-workshop App', function() {
  let page: NgpolandWorkshopPage;

  beforeEach(() => {
    page = new NgpolandWorkshopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
