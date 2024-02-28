import { Pipe, PipeTransform } from "@angular/core";




@Pipe({
    name:"addten"
})
export class AddTenPipe implements PipeTransform{
    transform(value: any, param:any, param2:any) {
        return value+param+ param2;
    }

}
