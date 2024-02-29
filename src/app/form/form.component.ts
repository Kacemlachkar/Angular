import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form!:FormGroup

  constructor(){}
  ngOnInit(): void {
    this.form=new FormGroup({
      name:new FormControl('',Validators.required),
      address:new FormControl('',[Validators.required,Validators.minLength(4)])
    })
    
  }


get name(){ return this.form.get("name")}
get address(){ return this.form.get("address")}
  add(){
    console.log("form",this.form.value)
  }
}
