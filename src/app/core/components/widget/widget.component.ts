import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent  {
 
  selectedSortOption : string;
  showExtraButtons = false;
  constructor(){
    this.selectedSortOption='';
  }
  toggleExtraButtons() {
    this.showExtraButtons = !this.showExtraButtons;
  }

  
}
