import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(

    private matIconRegistry: MatIconRegistry,

    private domSanitizer: DomSanitizer

  ) {

  this.matIconRegistry.addSvgIcon(

    "tdb",

    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/tdb.svg")

  );

  this.matIconRegistry.addSvgIcon(

    "alert",

    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/alerts.svg")

  );

  this.matIconRegistry.addSvgIcon(

    "historique",

    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/history.svg")

  );

  this.matIconRegistry.addSvgIcon(

    "maps",

    this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/icons/map.svg")

  );

}
  
}
