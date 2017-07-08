import { LibertyClevelandPage } from './app.po';

describe('liberty-cleveland App', () => {
  let page: LibertyClevelandPage;

  beforeEach(() => {
    page = new LibertyClevelandPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
