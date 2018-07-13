import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { CurrencyCatalogReducer } from './reducers/currency-catalog.reducer';
import { I_CURRENCY_API_SERVICE } from './interfaces/currency-api.service.token';
import { CurrencyApiService } from './services/currency-api.service';

@NgModule({
  providers:[{
    provide: I_CURRENCY_API_SERVICE,
    useClass: CurrencyApiService,
  }],
  imports: [
    CommonModule,
    StoreModule.forRoot(
      {
        currencyCatalog: CurrencyCatalogReducer,
      } 
    ),
  ],
  declarations: []
})
export class CoreModule { 
  constructor(){
    console.log('hello ')
  }
}
