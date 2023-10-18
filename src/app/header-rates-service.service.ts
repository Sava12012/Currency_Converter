import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CurrencyRatesService {
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/UAH';

  constructor(private http: HttpClient) { }

  getCurrencyRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getInvertedCurrencyRates(): Observable<any> {
    return this.http.get(this.apiUrl).pipe(
      map((data: any) => { // додайте ": any" після "data"
        const rates = data.rates;
        const invertedRates: any = {};
        for (const currency in rates) {
          invertedRates[currency] = 1 / rates[currency];
        }
        return { ...data, rates: invertedRates };
      })
    );
  }
}
