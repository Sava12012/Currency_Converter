import { Component, OnInit } from '@angular/core';
import { CurrencyRatesService } from '../header-rates-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currencyRates: any;

  constructor(private currencyRatesService: CurrencyRatesService) {}

  ngOnInit(): void {
    this.currencyRatesService.getCurrencyRates().subscribe((data: any) => {
      this.currencyRates = data;
    });
  }
}
