import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from '../models/appartment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {
appartUrl="http://localhost:3000/appartement"
  constructor(private http:HttpClient) { }


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

getappart():Observable<Apartment[]>{
  return this.http.get<Apartment[]>(this.appartUrl)
}
deleteappart(id:number):Observable<Apartment[]>{
  return this.http.delete<Apartment[]>(this.appartUrl+'/'+id)
}

addappart(appart:Apartment):Observable<Apartment[]>{
  return this.http.post<Apartment[]>(this.appartUrl,appart)
}

}
