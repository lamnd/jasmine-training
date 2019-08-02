import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'errorCheck'
})

export class ErrorCheck implements PipeTransform {

    transform(errors: any, error: any, args?: any): any {
    }
}
