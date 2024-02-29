import { Component, OnInit } from '@angular/core';
import { ResidenceService } from '../services/residence.service';
import { Apartment } from '../models/appartment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appartment',
  templateUrl: './appartment.component.html',
  styleUrls: ['./appartment.component.css']
})
export class AppartmentComponent implements OnInit{
  listappart:Apartment[]=[]
  constructor(private x:ResidenceService,private route:Router ){}

  ngOnInit(): void {
    this.x.getappart().subscribe((data)=>{
      this.listappart=data
      console.log(this.listappart)
    })
  }

  deleteappart(id:number){
    this.x.deleteappart(id).subscribe(()=>{
      console.log("deleted")
      window.location.reload()
    })
  }

  redirect(){

    this.route.navigate(['/addappartment'])
  }

}
