import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "alcoholcontent",
  pure: false
})

export class AlcoholContentPipe implements PipeTransform {
  transform(input: Keg[], desiredAlcoholLevel) {
    var output: Keg[] = [];
    if(desiredAlcoholLevel == "lowAlcoholContent") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].alcoholContent <= 4.0) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredAlcoholLevel === "midAlcoholContent") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].alcoholContent > 4.0 && input[i].alcoholContent < 6.9) {
            output.push(input[i]);
          }
        }
        return output;
    } else if (desiredAlcoholLevel === "highAlcoholContent") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].alcoholContent >= 7.0) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
