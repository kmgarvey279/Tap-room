import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from '../models/keg.model';

@Component({
  selector: 'app-Keg-list',
  templateUrl: './Keg-list.component.html',
  styleUrls: ['./Keg-list.component.css']
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByAlcoholContent: string = "allKegs";
  filterByRemainingPints: string = "kegsToReplace";

  sellButtonClicked(clickedKeg: Keg) {
    clickedKeg.remainingPints--;
  }

  sellGrowlerClicked(clickedKeg: Keg) {
    clickedKeg.remainingPints -= 2;
  }

  sellLargeGrowlerClicked(clickedKeg: Keg) {
    clickedKeg.remainingPints -= 4;
  }

  replaceButtonClicked(clickedKeg: Keg) {
    clickedKeg.remainingPints = 124;
  }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onChange(optionFromMenue) {
    this.filterByAlcoholContent = optionFromMenue;
  }

  saleButtonClicked(clickedKeg: Keg) {
    clicked.sale = true;
  }

  styleColor(currentKeg) {
    if (currentKeg.style == "ipa") {
      return "bg-success";
    } else if (currentKeg.style == "lager") {
      return "bg-danger";
    } else if (currentKeg.style == "sour") {
      return "bg-warning";
    } else {
      return "bg-info";
    }
  }
}
