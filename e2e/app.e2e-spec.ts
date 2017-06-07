import { Projet01Page } from './app.po';

describe('projet01 App', () => {
  let page: Projet01Page;

  beforeEach(() => {
    page = new Projet01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
