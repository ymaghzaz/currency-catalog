import { Component, OnInit,OnDestroy ,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { DEFAULT_SELECTED_PAGE, SUPPORTED_PAGES_SIZES } from '../../../common/constants/config';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit  , OnDestroy{
 @Input() public pageSize$ :BehaviorSubject<number> ;
 @Input()  public selectedPage$ :BehaviorSubject<number> ;
 public supportedPageSizes:any = SUPPORTED_PAGES_SIZES;
 public links:any = {};
 public numberOfPages :number= 0;
 public selectedPage :number= 0;
 public buttonsToSelectPages :any = [];
 private unsubscribe$: Subject<void> = new Subject<void>();

  constructor( public store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(takeUntil(this.unsubscribe$)).subscribe(storeInfo=>{
      this.selectedPage = storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.selectedPage || DEFAULT_SELECTED_PAGE;
      this.links =  storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.links || {};
      this.numberOfPages = storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.meta && storeInfo.currencyCatalog.meta.pages || 0;
      this.createPagination(this.selectedPage);
    })
  }
  selectPage(pageToBeSelected){
    this.selectedPage$.next(pageToBeSelected)
  }
  onChangePageSize(newSize){
    this.selectedPage$.next(1);
    this.pageSize$.next(newSize);
  }

  createPagination(selectedPage){
      this.buttonsToSelectPages = [];
      if(selectedPage-2>0){
        this.buttonsToSelectPages.push({
          value : selectedPage-2,
          selected : false
        });
      }
      if(selectedPage-1>0){
        this.buttonsToSelectPages.push({
          value : selectedPage-1,
          selected : false
        });
      }
      this.buttonsToSelectPages.push({
        value : selectedPage,
        selected : true
      });
      if(selectedPage+1<=this.numberOfPages){
        this.buttonsToSelectPages.push({
          value : selectedPage+1,
          selected : false
        });
      }
      if(selectedPage+2<=this.numberOfPages){
        this.buttonsToSelectPages.push({
          value : selectedPage+2,
          selected : false
        });
      }
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
