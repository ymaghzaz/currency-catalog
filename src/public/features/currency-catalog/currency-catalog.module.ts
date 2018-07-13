import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { CurrencyInfoComponent } from './currency-info/currency-info.component';
import { DisplayCurrencyComponent } from './display-currency/display-currency.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CatalogComponent, CurrencyInfoComponent, DisplayCurrencyComponent, FilterComponent, PaginationComponent],
  exports:[CatalogComponent,CurrencyInfoComponent]
})
export class CurrencyCatalogModule { }
