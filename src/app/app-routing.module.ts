import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriceCheckComponent } from './price-check/price-check.component';
import { FeaturesComponent } from './features/features.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
  },
  {
    path: 'price-check',
    component: PriceCheckComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
