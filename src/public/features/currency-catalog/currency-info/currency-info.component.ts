import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Currency } from 'src/public/common/models/currency.model';

@Component({
  selector: 'app-currency-info',
  templateUrl: './currency-info.component.html',
  styleUrls: ['./currency-info.component.css']
})
export class CurrencyInfoComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();
  public currencyId$ :BehaviorSubject<string> = new BehaviorSubject(''); 
  public currency :Currency = new Currency();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public store: Store<any>,
  ) { 

  
  }

  ngOnInit() {
    this.route.paramMap.pipe(takeUntil(this.unsubscribe$)).subscribe((params: ParamMap) =>{this.currencyId$.next(params.get('currencyId'))}) 
    this.store.pipe(takeUntil(this.unsubscribe$)).subscribe(storeInfo=>{
      let currenciesData  = storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.data || [] ;
      let index = currenciesData.map((currency:Currency)=>currency.id).indexOf(this.currencyId$.getValue())
      this.currency = new Currency(currenciesData[index] );
    })

  }

 
}
