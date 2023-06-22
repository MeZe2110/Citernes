
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Component} from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  selectedSortOption : string;
 

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    
    this.selectedSortOption='';
    this.matIconRegistry.addSvgIcon("tdb",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tdb.svg") );

  this.matIconRegistry.addSvgIcon("alert", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/alerts.svg") );

  this.matIconRegistry.addSvgIcon("historique",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/history.svg"));

  this.matIconRegistry.addSvgIcon( "maps",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/map.svg"));

}

onSortOptionChange(option: string) {
  // Handle the sort option change here
  console.log('Selected sort option:', option);
}

}
