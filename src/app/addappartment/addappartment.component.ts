import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Residence } from '../models/residence';

@Component({
  selector: 'app-addappartment',
  templateUrl: './addappartment.component.html',
  styleUrls: ['./addappartment.component.css']
})
export class AddappartmentComponent implements OnInit{
  addform!:FormGroup
  res:Residence={
    "id": 1,
    "name": "El fel",
    "address": "Borj Cedria",
    "image": "../../assets/images/residence1.jpg"
  }
  constructor(){}
  ngOnInit(): void {
    this.addform=new FormGroup({
      appartNum:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      residence:new FormControl(this.res,Validators.required)
    })
  }
add(){



}

}
