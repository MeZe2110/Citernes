import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WidgetComponent } from './components/widget/widget.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';
import { WidgetPompeComponent } from './components/widget-pompe/widget-pompe.component';



@NgModule({
  declarations: [
    HeaderNavbarComponent,
    WidgetComponent,
    WidgetPompeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    HeaderNavbarComponent,
    
  ]
})
export class CoreModule { }
