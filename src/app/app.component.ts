import { Component } from '@angular/core';
import { Keg } from './models/keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentFocus: string = "";
  selectedKeg = null;

  masterKegList: Keg[] = [
    new Keg("Summer Haze", "Darkside Brewing", 'ipa', 4.00, 3.4),
    new Keg("Tornato", "Riverfall Brewing", 'sour', 5.00, 5.1)
  ];

  addKeg(newKeg: Keg) {
    this.masterKegList.push(newKeg);
  }

  editKeg(clickedKeg) {
    this.selectedKeg = clickedKeg;
  }

  finishedEditing() {
    this.selectedKeg = null;
  }
}
