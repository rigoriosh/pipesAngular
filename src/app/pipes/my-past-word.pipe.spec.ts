import { MyPastWordPipe } from './my-past-word.pipe';

describe('MyPastWordPipe', () => {
  it('create an instance', () => {
    const pipe = new MyPastWordPipe();
    expect(pipe).toBeTruthy();
  });
});
