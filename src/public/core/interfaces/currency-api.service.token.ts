import {InjectionToken} from '@angular/core';
import {ICurrencyApiService} from './currency-api.service.interface';

export const I_CURRENCY_API_SERVICE = new InjectionToken<ICurrencyApiService>('ICurrencyApiService');
 