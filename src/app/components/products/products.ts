import { Component } from '@angular/core';
import { ProductComponent } from "../product/product";
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CurrencyPipe } from '@angular/common'
import { CategoryService } from '../../services/category';
import { ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [ProductComponent, CurrencyPipe],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent {

  categories : Category [] = [];
  product : Product = {} as Product;
  products : Product[] = [];

  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void{

    this.categoryService.getCategories().subscribe(
      {
        next: data => {this.categories = data}
      }
    );

    this.products = this.productService.getProducts();
  }

  saveProduct(product: Product){
    this.productService.saveProduct(product);
    product = {} as Product;
  }
}
