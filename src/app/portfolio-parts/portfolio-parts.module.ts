import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioPartsRoutingModule } from './portfolio-parts-routing.module';
import { PortfolioPartsComponent } from './portfolio-parts.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';
import { FaqComponent } from './faq/faq.component';
import { IconHoverComponent } from './icon-hover/icon-hover.component';
import { MatchGameComponent } from './match-game/match-game.component';
import { LoaderBarComponent } from './loader-bar/loader-bar.component';


@NgModule({
  declarations: [
    PortfolioPartsComponent,
    PasswordValidationComponent,
    FaqComponent,
    IconHoverComponent,
    MatchGameComponent,
    LoaderBarComponent
  ],
  imports: [
    CommonModule,
    PortfolioPartsRoutingModule
  ]
})
export class PortfolioPartsModule { }
