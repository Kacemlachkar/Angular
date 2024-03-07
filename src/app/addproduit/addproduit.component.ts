import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addproduit',
  templateUrl: './addproduit.component.html',
  styleUrls: ['./addproduit.component.css'],
})
export class AddproduitComponent implements OnInit {
  constructor(private route: Router) {}
  addform!: FormGroup;
  ngOnInit(): void {
    this.addform = new FormGroup({
      titre: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      prix: new FormControl('', [Validators.required, Validators.max(100)]),
      quantite: new FormControl('', [
        Validators.required,
        Validators.maxLength(10),
      ]),
      aime: new FormControl('', Validators.required),
    });
  }
  add() {
    console.log('added');
    console.log(this.addform.value);
    this.route.navigate(['/produit']);
  }
}
