import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPartsRoutingModule } from './portfolio-parts-routing.module';
import { PortfolioPartsComponent } from './portfolio-parts.component';


@NgModule({
  declarations: [
    PortfolioPartsComponent
  ],
  imports: [
    CommonModule,
    PortfolioPartsRoutingModule
  ]
})
export class PortfolioPartsModule { }
