import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPartsRoutingModule } from './portfolio-parts-routing.module';
import { PortfolioPartsComponent } from './portfolio-parts.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';
import { FaqComponent } from './faq/faq.component';
import { IconHoverComponent } from './icon-hover/icon-hover.component';


@NgModule({
  declarations: [
    PortfolioPartsComponent,
    PasswordValidationComponent,
    FaqComponent,
    IconHoverComponent
  ],
  imports: [
    CommonModule,
    PortfolioPartsRoutingModule
  ]
})
export class PortfolioPartsModule { }
