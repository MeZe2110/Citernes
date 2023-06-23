
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { Component} from '@angular/core';


@Component({
  selector: 'app-headerNavbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent {

  selectedSortOption : string;
  showExtraButtons = false;
  showExtraButtons1 = false;
  

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    
    this.selectedSortOption='';
    this.matIconRegistry.addSvgIcon("tdb",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tdb.svg") );
    this.matIconRegistry.addSvgIcon("alert", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/alerts.svg") );
    this.matIconRegistry.addSvgIcon("historique",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/history.svg"));
    this.matIconRegistry.addSvgIcon( "maps",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/map.svg"));
    this.matIconRegistry.addSvgIcon( "pompe",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/pompe.svg"));
    this.matIconRegistry.addSvgIcon( "citerne",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/citerne.svg"));

}

onSortOptionChange(option: string) {
  // Handle the sort option change here
  console.log('Selected sort option:', option);
}
toggleExtraButtons() {
  this.showExtraButtons = !this.showExtraButtons;
}

toggleExtraButtons1(){
  this.showExtraButtons1 = !this.showExtraButtons1;
}
}
