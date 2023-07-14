import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { exportDataGrid } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';


@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent {




  staticDataSource = [
    { Citerne: '1', Date: '2023-07-14', VolumeI: 10, Quantite: 30, Siphonage: 20, VolumeF: 20, Vehicule: 55555 },
    { Citerne: '2', Date: '2023-07-14', VolumeI: 10, Quantite: 30, Siphonage: 10, VolumeF: 30, Vehicule: 55555 }
    // Add more static data objects as needed
  ];

  


  staticDataPompe = [
   { Pompe: '1', Date: '2023-07-14',  Quantite: 30,  Vehicule: 55555 },
   { Pompe: '1', Date: '2023-07-14',  Quantite: 20,  Vehicule: 55555 },
   { Pompe: '2', Date: '2023-07-14',  Quantite: 30,  Vehicule: 55555 }
   // Add more static data objects as needed
 ];



  highcharts = Highcharts;
  chartOptions:any = {   
     chart: {
        type: 'column'
     },
     title: {
        text: 'Suivi de la distribution de toutes les pompes'
     },
     xAxis:{
        categories: ['Date 1', 'Date 2', 'Date 3', 'Date 3', 'Date 4'], title: {
           text: null
        } 
     },
     yAxis : {
        min: 0,
        title: {
           text: 'Quantités (L)',
           align: 'high'
        },
        labels: {
           overflow: 'justify'
        }
     },
     tooltip : {
        valueSuffix: ' liter'
     },
     plotOptions : {
        column: {
           dataLabels: {
              enabled: false
           }
        },
        series: {
           stacking: 'normal'
        }
     },
     credits:{
        enabled: false
     },
     series: [
        {
           name: 'Pompe 1',
           data: [1070, 3010, 6350, 2003, 7002]
        }, 
        {
           name: 'Pompe 2',
           data: [1033, 1506, 9470, 4008, 6000]
        }, 
        {
           name: 'Pompe 3',
           data: [9737, 9148, 4054, 7324, 3400]      
        },
        {
          name: 'Pompe 4',
          data: [9732, 5600, 4054, 7325, 3482]      
       }
     ]
  };


//CITERNE CHART

  highchart = Highcharts;
  chartOption:any = {   
     chart: {
        type: "line"
     },
     title: {
        text: "Suivi de la contenance de toutes les citernes"
     },
     
     xAxis:{
        categories:["Date 1", "Date 2", "Date 3", "Date 4", "Date 5", "Date 6",
           "Date 7", "Date 8", "Date 9", "Date 10", "Date 11", "Date 12"]
     },
     yAxis: {          
        title:{
           text:"Quantité (m³)"
        } 
     },
     plotOptions: {
        series: {
           dataLabels: {
              enabled: false
           }
        }
     },
     tooltip: {
        valueSuffix:" m³ "
     },
     series: [{
        name: 'Citerne 1',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
     },
     {
        name: 'Citerne 2',
        data: [2.5, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
     },
     {
        name: 'Citerne 3',
        data: [9.8, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
     },
     {
        name: 'Citerne 4',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
     }]
  };

  onExporting(e:any) {
   const doc = new jsPDF();
   exportDataGrid({
     jsPDFDocument: doc,
     component: e.component,
     indent: 5,
   }).then(() => {
     doc.save('Companies.pdf');
   });
 }

}
