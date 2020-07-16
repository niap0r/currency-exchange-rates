import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCheckComponent } from './price-check/price-check.component';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  declarations: [AppComponent, PriceCheckComponent, FeaturesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
