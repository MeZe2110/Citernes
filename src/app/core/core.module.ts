import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { WidgetComponent } from './components/widget/widget.component';
import { HeaderNavbarComponent } from './components/header-navbar/header-navbar.component';



@NgModule({
  declarations: [
    HeaderNavbarComponent,
    WidgetComponent
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
