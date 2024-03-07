import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidenceComponent } from './residence/residence.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannonceComponent } from './annonce/listannonce/listannonce.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AnnonceRoutingModule } from './annonce/annonce-routing.module';
import { FormComponent } from './form/form.component';
import{HttpClientModule} from '@angular/common/http';
import { AppartmentComponent } from './appartment/appartment.component';
import { AddappartmentComponent } from './addappartment/addappartment.component';
import { ProduitComponent } from './produit/produit.component';
import { AddproduitComponent } from './addproduit/addproduit.component';
import { ShowproduitComponent } from './showproduit/showproduit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ResidenceComponent,
    HomeComponent,
    NotfoundComponent,
    FormComponent,
    AppartmentComponent,
    AddappartmentComponent,
    ProduitComponent,
    AddproduitComponent,
    ShowproduitComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AnnonceModule,
    ReactiveFormsModule,
    HttpClientModule,RouterModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
