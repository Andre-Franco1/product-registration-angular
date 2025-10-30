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

  categories: Category[] = [];
  products: Product[] = [];
  product: Product = {} as Product;


  constructor(private categoryService: CategoryService, private productService: ProductService) { }

  ngOnInit(): void {

    this.categoryService.getCategories().subscribe(
      {
        next: data => { this.categories = data }
      }
    );

    this.productService.getProducts().subscribe(
      {
        next: data => { this.products = data }
      }
    );
  }

  //this solution works for only 1 user (lower complexity)
  saveProduct(product: Product) {
    this.productService.saveProduct(product).subscribe(
      {
        next: data => {
          this.products.push(data);
          this.product = {} as Product;
        } 
      }
    )
  }
}
