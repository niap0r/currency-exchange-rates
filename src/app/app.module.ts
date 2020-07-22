import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PriceCheckComponent } from './price-check/price-check.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';

import {
  NgBootstrapFormValidationModule,
  CUSTOM_ERROR_MESSAGES,
} from 'ng-bootstrap-form-validation';

import { CUSTOM_ERRORS } from './login/custom-errors';

@NgModule({
  declarations: [
    AppComponent,
    PriceCheckComponent,
    FeaturesComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgBootstrapFormValidationModule.forRoot(),
    NgBootstrapFormValidationModule,
  ],
  providers: [
    {
      provide: CUSTOM_ERROR_MESSAGES,
      useValue: CUSTOM_ERRORS,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
