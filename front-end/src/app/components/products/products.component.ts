import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Models/product.model';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$:Observable<Product[]> | null = null ;

  constructor(private productsService:ProductsService) {}

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts() {
   this.products$ = this.productsService.getAllProducts();
  }

  onDelete(p: Product) {
    this.productsService.deleteProduct(p).subscribe(
      data => {
        this.onGetAllProducts();
      }
    )

  }
}
