import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'upup'
})
export class UpupPipe implements PipeTransform {

  transform(value: string, suffix: string, prefix: string): string {
    return prefix + value.toUpperCase() + suffix;
  }

}
