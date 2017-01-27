import { TureloNewPage } from './app.po';

describe('turelo-new App', function() {
  let page: TureloNewPage;

  beforeEach(() => {
    page = new TureloNewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
