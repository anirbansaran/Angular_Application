import { UserhomeModule } from './userhome.module';

describe('UserhomeModule', () => {
  let userhomeModule: UserhomeModule;

  beforeEach(() => {
    userhomeModule = new UserhomeModule();
  });

  it('should create an instance', () => {
    expect(userhomeModule).toBeTruthy();
  });
});
