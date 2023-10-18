import { Component, OnInit } from '@angular/core';
import { CurrencyRatesService } from '../header-rates-service.service'; // переконайтеся, що шлях до файлу правильний

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  currencyRates: any;

  constructor(private currencyRatesService: CurrencyRatesService) {} // тут ви використовуєте сервіс

  ngOnInit(): void {
    this.currencyRatesService.getInvertedCurrencyRates().subscribe((data: any) => {
      this.currencyRates = data;
    });
  }
}
