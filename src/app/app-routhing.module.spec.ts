import { AppRouthingModule } from './app-routhing.module';

describe('AppRouthingModule', () => {
  let appRouthingModule: AppRouthingModule;

  beforeEach(() => {
    appRouthingModule = new AppRouthingModule();
  });

  it('should create an instance', () => {
    expect(appRouthingModule).toBeTruthy();
  });
});
