import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  
  constructor(private router:Router){}

  listProduit: any[] = [
    { id: 1, titre: "T-shirt 1", prix: 18, quantite: 0, aime: 0 },
    { id: 2, titre: "T-shirt 2", prix: 21, quantite: 10, aime: 0 },
    { id: 3, titre: "T-shirt 3", prix: 16, quantite: 8, aime: 0 }
  ] ;
  
  redirectToProductDetails(productId: number) {
    this.router.navigate(['/showproduit']);
  }
  @Input() id!: number; // L'ID du produit à supprimer
@Output() delete = new EventEmitter<number>(); // Émet un événement lors de la suppression

deleteProduct(id: number) {
  this.listProduit = this.listProduit.filter(produit => produit.id !== id);
  // Vous pouvez également appeler un service pour supprimer le produit côté serveur ici
}
}
