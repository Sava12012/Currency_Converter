import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  exchangeRates: any;
  fromCurrency!: string;
  toCurrency!: string;
  amount!: number;
  convertedAmount!: number;

  constructor(private currencyService: CurrencyService) {}

  ngOnInit(): void {
    this.currencyService.getExchangeRates().subscribe((data) => {
      console.log(
        'CurrencyConverterComponent  this.currencyService.getExchangeRates  data:',
        data
      );
      this.exchangeRates = data;
    });
  }

  onAmountChange(): void {
    if (
      this.exchangeRates &&
      this.fromCurrency &&
      this.toCurrency &&
      this.amount
    ) {
      let baseAmount: number;

      if (this.fromCurrency === 'base') {
        // If the "fromCurrency" is the base currency, simply use the entered amount
        baseAmount = this.amount;
      } else if (this.toCurrency === 'base') {
        // If the "toCurrency" is the base currency, use the inverse of the entered amount
        baseAmount = this.amount / this.exchangeRates.rates[this.fromCurrency];
      } else {
        // If neither the "fromCurrency" nor "toCurrency" is the base currency, first convert to the base currency
        baseAmount = this.amount / this.exchangeRates.rates[this.fromCurrency];
      }

      // Convert the base amount to the "toCurrency"
      this.convertedAmount =
        baseAmount * this.exchangeRates.rates[this.toCurrency];
    }
  }
}
