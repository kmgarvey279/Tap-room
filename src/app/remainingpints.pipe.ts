import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "remainingpints",
  pure: false
})

export class RemainingPintsPipe implements PipeTransform {
  transform(input: Keg[], desiredRemainingPints) {
    var output: Keg[] = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i].remainingPints <= 10) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
