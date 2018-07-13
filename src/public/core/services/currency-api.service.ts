import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { map } from 'rxjs/internal/operators/map';
import { ICurrencyApiService } from '../interfaces/currency-api.service.interface';
import { CURRENCIES_API, OPEN_FINTECH } from '../../common/constants/globals';

@Injectable()
export class CurrencyApiService implements ICurrencyApiService {
  constructor(private http: HttpClient) {
  }
  public getCurrencies(pageSize:number,selectedPage:number): Observable<any> { 
    return this.http.get(`${CURRENCIES_API}?page[number]=${selectedPage}&page[size]=${pageSize}`)
  }
  public getCurrenciesByPage(ressourcesApi): Observable<any> {
    return this.http.get(`${OPEN_FINTECH}${ressourcesApi}`)
  }
 
}