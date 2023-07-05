import { Component, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent  {
 
  selectedSortOption : string;
  showExtraButtons : Boolean = false;
  Istoggeled : Boolean = false;
  IsDelete : Boolean = false;


  constructor( private dialog: MatDialog){
    this.selectedSortOption='';
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
}
toggleDelete(){
  this.IsDelete=!this.IsDelete;
}
  
}
