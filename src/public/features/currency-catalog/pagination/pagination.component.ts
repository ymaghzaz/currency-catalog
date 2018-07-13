import { Component, OnInit,OnDestroy ,Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit  , OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
 @Input() public pageSize$ :BehaviorSubject<number> ;
 @Input()  public selectedPage$ :BehaviorSubject<number> ;
 public supportedPageSizes:any =[ 10 , 50 , 100 , 200];
 public links:any = {};
 public pages :number= 0;
 public selectedPage :number= 0;
 public buttonsPage :any = [];
 
  constructor( public store: Store<any>) { }

  ngOnInit() {
    this.store.pipe(takeUntil(this.unsubscribe$)).subscribe(storeInfo=>{
      this.selectedPage = storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.selectedPage || 1;
      this.links =  storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.links || {};
      this.pages = storeInfo && storeInfo.currencyCatalog && storeInfo.currencyCatalog.meta && storeInfo.currencyCatalog.meta.pages || 0;
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
      this.buttonsPage = [];
      if(selectedPage-2>0){
        this.buttonsPage.push(selectedPage-2);
      }
      if(selectedPage-1>0){
        this.buttonsPage.push(selectedPage-1);
      }
      if(selectedPage+1<=this.pages){
        this.buttonsPage.push(selectedPage+1);
      }
      if(selectedPage+2<=this.pages){
        this.buttonsPage.push(selectedPage+2);
      }
  }

  ngOnDestroy(){
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


}
