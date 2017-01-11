
import {AbstractControl, Validator, ValidatorFn} from "@angular/forms";

export class CustomValidators {

  static noSpace(control:AbstractControl){
    if(control.value.indexOf(' ') >= 0){
      return { withSpace: true }
    }
    return null;
  }

  static isNir(control:AbstractControl){
    if(control.value.indexOf('nir') >= 0){
      return { withNir: true }
    }
    return null;
  }

}
