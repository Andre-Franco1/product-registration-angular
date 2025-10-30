import { Injectable } from '@angular/core';
import { Product } from '../interfaces/Product';
import { CategoryService } from './category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  
  products : Product [] = [];
  // products : Product [] = [
  //     {id : 1, name : 'Product 1', description: 'Description of a product (1)', price: 50.00, category: , promotion: true, newProduct: false},
  //     {id : 2, name : 'Product 2', description: 'Description of a product (2)', price: 75.50, category: , promotion: false, newProduct: false},
  //     {id : 3, name : 'Product 3', description: 'Description of a product (3)', price: 32.95, category: , promotion: true, newProduct: true}
  //   ]

  getProducts() : Product[] {
      return this.products;
  }

  saveProduct(product: Product){
    product.id = this.products.length + 1;
    this.products.push(product);
  }
}
