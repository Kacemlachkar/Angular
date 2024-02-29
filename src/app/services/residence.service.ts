import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor() { }


   getnumber(list:any,creteria:string,value:any){
    //console.log("hello 4BI5")
    let n=0
    for(let i in list){
      if(list[i][creteria]==value){
        n++
      }
    }
    return n
   }
}
