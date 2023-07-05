
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
  selectedButton: string;
  

  constructor(private matIconRegistry: MatIconRegistry,private domSanitizer: DomSanitizer) {
    
    this.selectedSortOption='';
    this.selectedButton='dashboard';
    this.matIconRegistry.addSvgIcon("tdb",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tdb.svg") );
    this.matIconRegistry.addSvgIcon("alert", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/alerts.svg") );
    this.matIconRegistry.addSvgIcon("historique",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/history.svg"));
    this.matIconRegistry.addSvgIcon( "maps",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/map.svg"));
    this.matIconRegistry.addSvgIcon( "tp",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-15.svg"));
    this.matIconRegistry.addSvgIcon( "tc",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-16.svg"));
    this.matIconRegistry.addSvgIcon( "capacite",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-17.svg"));
    this.matIconRegistry.addSvgIcon( "nature",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-18.svg"));
    this.matIconRegistry.addSvgIcon( "date",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-19.svg"));
    this.matIconRegistry.addSvgIcon( "pmap",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-20.svg"));
    this.matIconRegistry.addSvgIcon( "fleche",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-21.svg"));
    this.matIconRegistry.addSvgIcon( "menus",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/icon-26.svg"));
    this.matIconRegistry.addSvgIcon("tbd_clicked",this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tbd_clicked.svg"));

}

onSortOptionChange(option: string) {
  // Handle the sort option change here
  console.log('Selected sort option:', option);
}

}
