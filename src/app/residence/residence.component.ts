import { Component } from '@angular/core';
import { Apartment } from '../models/appartment';
import { Residence } from '../models/residence';
import { ResidenceService } from '../services/residence.service';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent {


  constructor(private serviceres:ResidenceService){

  }
  variable:string="bonjour"
  prop:boolean=false
  message:string=""
 prop1:string="bonjour"
imageurl="../assets/images/"
searchsurface!:number
selectedchoice!:number
listappart:Apartment[]=[]
 listResidences:Residence[]=[
  {id:1,"name": "El fel","address":"Borj Cedria", "image":this.imageurl+"residence1.jpg"},
   {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/residence3.jpg"},
   {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/residence3.jpg"},
   {id:4,"name": "El Anber","address":"Manzah 5", "image":"../../assets/images/residence2.jpg"}
 ];

 listApartments:Apartment[]=[
  {id:1,"appartNum":1,"floorNum":1,"surface":100,"terrace":"oui","surfaceTerrace":20,"category":"S+1","description":"Appartement S+1","residence":this.listResidences[0] },
  {id:2,"appartNum":2,"floorNum":1,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","description":"Appartement S+2","residence":this.listResidences[0] },
  {id:3,"appartNum":3,"floorNum":2,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","description":"Appartement S+3","residence":this.listResidences[1] },]


  showappart(residence:number){
console.log(residence)
let applist:Apartment[]=[]
for(let i=0; i<this.listApartments.length ;i++){
  if(this.listApartments[i].residence.id==residence){
applist.push(this.listApartments[i])
  }
}
this.listappart=applist
  }
  show(){
    console.log(this.message="bonjour 4ERP-BI")
  }
somme!:number
  shownumber(){
    this.somme=this.serviceres.getnumber(this.listApartments,"floorNum",1)
  }

}
