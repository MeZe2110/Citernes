import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './core/components/widget/widget.component';
import { HistoriqueComponent } from './core/components/historique/historique.component';
import { WidgetPompeComponent } from './core/components/widget-pompe/widget-pompe.component';

const routes: Routes = [

  {path : 'dashboard', component : WidgetComponent},
  {path : 'historique', component : HistoriqueComponent},
  {path : 'maps', component : WidgetComponent},
  {path : 'alert', component : WidgetComponent},
  {path : 'pompe',component : WidgetPompeComponent, outlet: 'pompe'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
