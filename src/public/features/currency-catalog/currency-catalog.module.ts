import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { DisplayCurrencyComponent } from './display-currency/display-currency.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogComponent, CurrencyInfoComponent, DisplayCurrencyComponent],
  exports:[CatalogComponent,CurrencyInfoComponent]
})
export class CurrencyCatalogModule { }
