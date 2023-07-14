import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HighchartsChartModule } from 'highcharts-angular';
import { DxDataGridModule,DxBulletModule,DxTemplateModule} from 'devextreme-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    HighchartsChartModule
  ],
  exports: [
    MaterialModule,
    HighchartsChartModule,
    DxDataGridModule,
    DxBulletModule,
    DxTemplateModule,
    
  ]
})
export class SharedModule { }
