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
  filterByStyle: string = "displayNone";
  filterByRemainingPints: string = "kegsToReplace";

  sellButtonClicked(clickedKeg: Keg) {
    if (clickedKeg.remainingPints > 0) {
      clickedKeg.remainingPints--;
    }
  }

  sellGrowlerClicked(clickedKeg: Keg) {
    if (clickedKeg.remainingPints > 1) {
      clickedKeg.remainingPints -= 2;
    }
  }

  sellLargeGrowlerClicked(clickedKeg: Keg) {
    if (clickedKeg.remainingPints > 3) {
      clickedKeg.remainingPints -= 4;
    }
  }

  replaceButtonClicked(clickedKeg: Keg) {
    clickedKeg.remainingPints = 124;
  }

  editButtonClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  onAlcoholContentChange(optionFromMenu) {
    this.filterByAlcoholContent = optionFromMenu;
  }

  onStyleChange(optionFromMenu) {
    this.filterByStyle = optionFromMenu;
  }

  saleButtonClicked(clickedKeg: Keg) {
    if (clickedKeg.sale == true) {
      clickedKeg.sale = false;
      clickedKeg.price += 2;
    } else {
      clickedKeg.sale = true;
      clickedKeg.price -= 2;
    }
  }

  happyHourStartButtonClicked() {
    for (let i = 0; i < this.childKegList.length; i++) {
      if (this.childKegList[i].sale == false) {
        this.childKegList[i].sale = true;
        this.childKegList[i].price -= 2;
      }
    }
  }

  happyHourEndButtonClicked() {
    for (let i = 0; i < this.childKegList.length; i++) {
      if (this.childKegList[i].sale == true) {
        this.childKegList[i].sale = false;
        this.childKegList[i].price += 2;
      }
    }
  }

  styleColor(currentKeg) {
    if (currentKeg.remainingPints == 0) {
      return "bg-dark";
    } else if (currentKeg.sale == true) {
      return "bg-warning";
    } else if (currentKeg.style == "ipa") {
      return "bg-success";
    } else if (currentKeg.style == "lager") {
      return "bg-danger";
    } else if (currentKeg.style == "sour") {
      return "bg-primary";
    } else {
      return "bg-info";
    }
  }

}
