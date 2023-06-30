import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoriqueRoutingModule } from './historique-routing.module';
import { HistoriqueComponent } from './components/historique/historique.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HistoriqueComponent
  ],
  imports: [
    CommonModule,
    HistoriqueRoutingModule,
    SharedModule
  ]
})
export class HistoriqueModule { }
