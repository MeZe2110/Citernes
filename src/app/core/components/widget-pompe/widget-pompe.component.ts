import { Component } from '@angular/core';

@Component({
  selector: 'app-widget-pompe',
  templateUrl: './widget-pompe.component.html',
  styleUrls: ['./widget-pompe.component.scss']
})
export class WidgetPompeComponent {
  selectedSortOption : string;
  showExtraButtons : Boolean = false;
  constructor(){
    this.selectedSortOption='';
  }
  toggleExtraButtons() {
    this.showExtraButtons = !this.showExtraButtons;
  }

}
