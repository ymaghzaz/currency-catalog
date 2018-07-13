import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from '../public/features/currency-catalog/catalog/catalog.component';
import { CurrencyInfoComponent } from '../public/features/currency-catalog/currency-info/currency-info.component';

const APP_MODULE_ROUTES: Routes = [
  {
    path: '',
    component: CatalogComponent
  },
  {
    path: 'currency/:currencyId',
   component:CurrencyInfoComponent
  },
  {
    path: 'currency',
    redirectTo: '' 
  },
  { path: '**',  redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(APP_MODULE_ROUTES, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

 