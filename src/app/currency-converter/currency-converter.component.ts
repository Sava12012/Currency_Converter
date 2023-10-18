import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  exchangeRates: any;
  currencyRates: any;
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
      this.currencyRates = data;
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
        baseAmount = this.amount;
      } else if (this.toCurrency === 'base') {
        baseAmount = this.amount / this.exchangeRates.rates[this.fromCurrency];
      } else {
        baseAmount = this.amount / this.exchangeRates.rates[this.fromCurrency];
      }
      this.convertedAmount =
        baseAmount * this.exchangeRates.rates[this.toCurrency];
    }
  }

  

  onConvertedAmountChange(): void {
    if (
      this.exchangeRates &&
      this.fromCurrency &&
      this.toCurrency &&
      this.convertedAmount
    ) {
      let baseAmount: number;
      if (this.toCurrency === 'base') {
        baseAmount = this.convertedAmount;
      } else if (this.fromCurrency === 'base') {
        baseAmount = this.convertedAmount / this.exchangeRates.rates[this.toCurrency];
      } else {
        baseAmount = this.convertedAmount / this.exchangeRates.rates[this.toCurrency];
      }
      this.amount =
        baseAmount * this.exchangeRates.rates[this.fromCurrency];
    }
  }
}
