import { UrlBeautifierPipe } from './url-beautifier.pipe';

describe('UrlBeautifierPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlBeautifierPipe();
    expect(pipe).toBeTruthy();
  });
});
