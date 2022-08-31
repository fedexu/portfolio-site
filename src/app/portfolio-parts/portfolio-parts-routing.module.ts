import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioPartsComponent } from './portfolio-parts.component';

const routes: Routes = [
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
