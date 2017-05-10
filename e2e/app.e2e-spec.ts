import { ParentAppPage } from './app.po';

describe('parent-app App', function() {
  let page: ParentAppPage;

  beforeEach(() => {
    page = new ParentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
