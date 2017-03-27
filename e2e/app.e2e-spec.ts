import { Projectroom2Page } from './app.po';

describe('projectroom2 App', () => {
  let page: Projectroom2Page;

  beforeEach(() => {
    page = new Projectroom2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
