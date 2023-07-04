import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WidgetComponent } from './components/widget/widget.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { WidgetPompeComponent } from './components/widget-pompe/widget-pompe.component';
import { HistoriqueComponent } from './components/historique/historique.component';
import { RouterModule } from '@angular/router';
import { MapsComponent } from './components/maps/maps.component';
import { AlerteComponent } from './components/alerte/alerte.component';
import { FormComponent } from './components/form/form.component';


@NgModule({
  declarations: [
    HeaderNavbarComponent,
    WidgetComponent,
    WidgetPompeComponent,
    HistoriqueComponent,
    MapsComponent,
    AlerteComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderNavbarComponent,
    
  ]
})
export class CoreModule { }
