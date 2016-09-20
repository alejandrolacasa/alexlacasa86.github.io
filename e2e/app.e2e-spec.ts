import { MisssaraosPage } from './app.po';

describe('misssaraos App', function() {
  let page: MisssaraosPage;

  beforeEach(() => {
    page = new MisssaraosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
