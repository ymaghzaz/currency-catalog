import { Observable } from "rxjs/internal/Observable";

export interface ICurrencyApiService {
     getCurrencies(pageSize:number , selectedPage:number): Observable<any>
}

