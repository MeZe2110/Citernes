import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetComponent } from './core/components/widget/widget.component';
import { HistoriqueComponent } from './core/components/historique/historique.component';
import { MapsComponent } from './core/components/maps/maps.component';
import { AlerteComponent } from './core/components/alerte/alerte.component';

const routes: Routes = [

  {path : 'dashboard', component : WidgetComponent},
  {path : 'historique', component : HistoriqueComponent},
  {path : 'maps', component : MapsComponent},
  {path : 'alert', component : AlerteComponent},
  {path : '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
