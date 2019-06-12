import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-edit-Keg',
  templateUrl: './edit-Keg.component.html',
  styleUrls: ['./edit-Keg.component.css']
})
export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() clickedDone = new EventEmitter();

  finishedEditing() {
    this.clickedDone.emit();
  }
}
