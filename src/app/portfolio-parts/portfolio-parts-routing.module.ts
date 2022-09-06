import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { IconHoverComponent } from './icon-hover/icon-hover.component';
import { MatchGameComponent } from './match-game/match-game.component';
import { PasswordValidationComponent } from './password-validation/password-validation.component';
import { PortfolioPartsComponent } from './portfolio-parts.component';

const routes: Routes = [
  {
    path: 'passwordValidation',
    component: PasswordValidationComponent
  },
  {
    path: 'faq',
    component: FaqComponent
  },
  {
    path: 'icon-hover',
    component: IconHoverComponent
  },
  {
    path: 'match-game',
    component: MatchGameComponent
  },
  {
    path: '',
    component: PortfolioPartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioPartsRoutingModule { }
