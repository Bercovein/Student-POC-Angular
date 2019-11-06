import { ValidatorFn, AbstractControl } from '@angular/forms';

export class CustomValidator{

    static forbiddenName(forbiddenNameRegEx : RegExp) : ValidatorFn{
        return (control: AbstractControl) : {[key: string]:any} | null=>{
            const forbidden = forbiddenNameRegEx.test(control.value);
            
            return forbidden? {'forbiddenName' : {value: control.value}} : null;
        }
    }
}