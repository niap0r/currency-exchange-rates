import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiConnectorService {
  currencies: Array<string> = ['USD', 'CNY', 'GBP', 'RUB', 'INR', 'MXN', 'IDR', 'ISK'];

  constructor(private http: HttpClient) {}

  getSingleCurrency(currency: string) {
    return this.http.get('https://api.frankfurter.app/latest?from=' + currency);
  }

  getAllCurrencies(): Array<Currency> {
    let currencyReports: Array<Currency> = [];
    for (let currencyName of this.currencies) {
      this.getSingleCurrency(currencyName).subscribe((data) => {
        let inEuro: string = data['rates']['EUR'];
        let date: string = data['date'];
        let currency = new Currency(currencyName, inEuro, date);
        currencyReports.push(currency);
      });
    }

    return currencyReports;
  }
}

class Currency {
  name: string;
  inEuro: string;
  date: string;
  perEuro: string;

  constructor(name: string, inEuro: string, date: string) {
    this.name = name;
    this.inEuro = inEuro;
    this.date = date;
    this.perEuro = (1 / +inEuro).toFixed(3);
  }
}
