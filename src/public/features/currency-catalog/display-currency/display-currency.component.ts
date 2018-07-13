import { Component, OnInit, Input } from '@angular/core';
import { Currency } from 'src/public/common/models/currency.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-currency',
  templateUrl: './display-currency.component.html',
  styleUrls: ['./display-currency.component.css']
})
export class DisplayCurrencyComponent implements OnInit {
  @Input() currency :Currency
  constructor(public router: Router) { }

  ngOnInit() {
  }
  
  currencyInfo(){
    this.router.navigate([`/currency/${this.currency.id}`])
  }
}
