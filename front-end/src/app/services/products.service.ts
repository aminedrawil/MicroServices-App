import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../Models/product.model";
import { environment } from "src/environments/environment";

@Injectable({providedIn:"root"})
export class ProductsService {
    constructor(private http:HttpClient) {
    }

    getAllProducts():Observable<Product[]>  {
        let host = environment.host ;
        let ProductsHost =host +  "PRODUCTS-SERVICE/products";
        return this.http.get<Product[]>(ProductsHost);
    }

    deleteProduct(product:Product) : Observable<void> {
      let host = environment.host ;
      let ProductsHost =host +  "PRODUCTS-SERVICE/products/";
      return this.http.delete<void>(ProductsHost+product._id);
    }
}
