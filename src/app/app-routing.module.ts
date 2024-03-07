import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidenceComponent } from './residence/residence.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { FormComponent } from './form/form.component';
import { AppartmentComponent } from './appartment/appartment.component';
import { AddappartmentComponent } from './addappartment/addappartment.component';
import { ProduitComponent } from './produit/produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ShowproduitComponent } from './showproduit/showproduit.component';

const ROUTES:Routes=[
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"residence",component:ResidenceComponent},
  {path:"appartment",component:AppartmentComponent},
  {path:"addappartment",component:AddappartmentComponent},
  {path:"form",component:FormComponent},
  {path:"produit",component:ProduitComponent},
  {path:"addproduit",component:AddproduitComponent},
  {path:"showproduit",component:ShowproduitComponent},
  {path:'showproduit/:id', component: ShowproduitComponent }


 // {path:"**",component:NotfoundComponent}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES),
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
