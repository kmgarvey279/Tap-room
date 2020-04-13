import { Pipe, PipeTransform } from '@angular/core';
import { Keg } from './models/keg.model';

@Pipe({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform {
  transform(input: Keg[], desiredStyle) {
    var output: Keg[] = [];
    if(desiredStyle === "porter") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style == "porter") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStyle === "ipa") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].style == "ipa") {
            output.push(input[i]);
          }
        }
        return output;
    } else if (desiredStyle === "sour") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style == "sour") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredStyle === "lager") {
      for (let i = 0; i < input.length; i++) {
        if (input[i].style == "lager") {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
