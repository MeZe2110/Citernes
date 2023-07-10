import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {




  constructor(public dialogRef: MatDialogRef<FormComponent>){}

  closeForm():void{
    this.dialogRef.close();
  }

  
}
