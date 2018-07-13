import { CurrencyCatalogModule } from './currency-catalog.module';

describe('CurrencyCatalogModule', () => {
  let currencyCatalogModule: CurrencyCatalogModule;

  beforeEach(() => {
    currencyCatalogModule = new CurrencyCatalogModule();
  });

  it('should create an instance', () => {
    expect(currencyCatalogModule).toBeTruthy();
  });
});
