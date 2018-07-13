import { Component, OnInit , Input  , OnDestroy} from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { Currency } from 'src/public/common/models/currency.model';
import _ from "lodash";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit,OnDestroy {
  @Input() currenciesData$ :BehaviorSubject<Currency[]>;
  private unsubscribe$: Subject<void> = new Subject<void>();
  public supportedFilterSelector :any = ['id','name','code','type'];
  public selectedFilter :string = 'name';
  public filterStream$ : BehaviorSubject<any>= new BehaviorSubject('');
  constructor(public store: Store<any>) { }
  public currenciesDataWithoutFilter :Currency[]=[];

  ngOnInit() {
    this.store.pipe(takeUntil(this.unsubscribe$)).subscribe(storeInfo=>{
      this.currenciesDataWithoutFilter  = storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.data || [] ;
    })

    this.filterStream$.pipe(
      debounceTime(500),
      distinctUntilChanged(), 
        takeUntil(this.unsubscribe$)).subscribe( filterInputText =>{
        let getSelector :any = (cyrrency:Currency, filter)=>{
          let supportedFilter = {
            id : cyrrency.id,
            name :cyrrency.attributes.name,
            code :cyrrency.attributes.code,
            type :cyrrency.attributes.currency_type
          }
          return  supportedFilter[filter];
        } 
        if(filterInputText.length > 0){
          let currenciesDataFiltred = _.filter(this.currenciesDataWithoutFilter,
            (cyrrency:Currency) =>getSelector(cyrrency,
              this.selectedFilter).toLowerCase().includes(filterInputText.toLowerCase()));
            this.currenciesData$.next(currenciesDataFiltred);
        }else{
          this.currenciesData$.next(this.currenciesDataWithoutFilter);
        }
       
      })

  }

  onChangeFilterSelector(filter){
    this.selectedFilter = filter;
  }
  onKeySearch(event){
    this.filterStream$.next(event.target.value);
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
