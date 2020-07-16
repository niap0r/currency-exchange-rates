import { Component, OnInit } from '@angular/core';
import { ApiConnectorService } from '../api-connector.service';

@Component({
  selector: 'app-price-check',
  templateUrl: './price-check.component.html',
  styleUrls: ['./price-check.component.scss'],
})
export class PriceCheckComponent implements OnInit {
  constructor(private _api: ApiConnectorService) {}

  currencyReports;

  ngOnInit(): void {
    this.currencyReports = this._api.getAllCurrencies();

  }
}
