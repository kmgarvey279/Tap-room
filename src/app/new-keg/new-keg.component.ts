import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-new-Keg',
  templateUrl: './new-Keg.component.html',
  styleUrls: ['./new-Keg.component.css']
})
export class NewKegComponent {
  @Output() sendKeg = new EventEmitter();

  submitForm(name: string, brand: string, style: string, price: string, alcoholContent: string) {
    let newKeg: Keg = new Keg(name, brand, style, parseInt(price), parseInt(alcoholContent));
    this.sendKeg.emit(newKeg);
  }
}
