import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showproduit',
  templateUrl: './showproduit.component.html',
  styleUrls: ['./showproduit.component.css'],
})
export class ShowproduitComponent {
  id!: number;
  titre!: string;
  prix!: string;
  constructor(private activatedrouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.activatedrouter.snapshot.params['id'];
    this.titre = this.activatedrouter.snapshot.params['titre'];
    this.prix = this.activatedrouter.snapshot.params['prix'];

    console.log(this.id);
  }
}
