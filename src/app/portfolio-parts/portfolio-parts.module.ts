import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPartsRoutingModule } from './portfolio-parts-routing.module';
import { PortfolioPartsComponent } from './portfolio-parts.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';


@NgModule({
  declarations: [
    PortfolioPartsComponent,
    PasswordValidationComponent
  ],
  imports: [
    CommonModule,
    PortfolioPartsRoutingModule
  ]
})
export class PortfolioPartsModule { }
