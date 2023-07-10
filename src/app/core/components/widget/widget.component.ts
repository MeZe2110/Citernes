import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';


//Classe
interface Citerne{
id :  string;
nature : string;
date_dernier_ravitallement : Date;
date : Date;
capacite : number;
}

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent implements OnInit {
  citernes : Citerne[]=[

    {
      id : '1',
      nature : 'Gasoile',
      date_dernier_ravitallement : new Date("05/07/2023"),
      date : new Date("08/07/2023 15:17"),
      capacite : 7.5
    },
    {
      id : '2',
      nature :'Gasoile',
      date_dernier_ravitallement : new Date("05/07/2023"),
      date : new Date("08/07/2023 15:17"),
      capacite : 7.5
    },
    {
      id : '3',
      nature : 'Gasoile',
      date_dernier_ravitallement : new Date("05/07/2023"),
      date : new Date("08/07/2023 15:17"),
      capacite : 7.5
    },
    {
      id : '4',
      nature : 'Gasoile',
      date_dernier_ravitallement : new Date("05/07/2023"),
      date : new Date("08/07/2023 15:17"),
      capacite : 7.5
    },

  ]
  filteredCiternes: Citerne[] = [];

  selectedSortOption : string;
  showExtraButtons : Boolean = false;
  Istoggeled : Boolean = false;
  IsDelete : Boolean = false;
  selectedCiterneId: string='' ;
  filtre :string ='';
  

  constructor( private dialog: MatDialog){
    this.selectedSortOption='';
   
  }
 

  
  updateFilteredCiternes(): void {
    if (this.selectedCiterneId === '0') {
      this.filteredCiternes = this.citernes;
    } else {
      this.filtre=this.selectedCiterneId;
      this.filteredCiternes = this.citernes.filter(citerne => citerne.id === this.filtre);
     
    }
  }
  ngOnInit(): void {
    this.selectedCiterneId = '0';
    this.updateFilteredCiternes();
  }
  
  onSelectCiterne(): void {
    this.selectedCiterneId = this.selectedCiterneId;
    this.updateFilteredCiternes();
  }
 

  //functions
  toggleExtraButtons() {
    this.showExtraButtons = !this.showExtraButtons;
  }
  openPopupForm(): void {
    const dialogRef = this.dialog.open(FormComponent, {
      width: '50%', // Adjust the width as per your needs
    });
     // Subscribe to the dialog's afterClosed event to handle the result
  dialogRef.afterClosed().subscribe(result => {
    // Handle the result or perform any necessary actions
  });
}

toggleModify(){
  this.Istoggeled=!this.Istoggeled;
  this.IsDelete=false;
}
toggleDelete(){
  this.IsDelete=!this.IsDelete;
  this.Istoggeled=false;
}

deleteCiterne(citerne: Citerne): void {
  const index = this.citernes.indexOf(citerne);
  if (index !== -1) {
    this.citernes.splice(index, 1);
  }
}





 
  
}
