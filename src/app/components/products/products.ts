import { Component } from '@angular/core';
import { ProductComponent } from "../product/product";
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { CurrencyPipe } from '@angular/common'
import { CategoryService } from '../../services/category';
import { ProductService } from '../../services/product';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
  deleteProduct: Product = {} as Product;

  showForm: boolean = false;
  isEditing: boolean = false;

  constructor(private categoryService: CategoryService, private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadCategories();
  }

  loadProducts() {
    this.categoryService.getCategories().subscribe({
      next: data => { this.categories = data }
    });
  }

  loadCategories() {
    this.productService.getProducts().subscribe({
      next: data => { this.products = data }
    });
  }

  saveProduct(save: boolean) {
    if (save) {
      if (this.isEditing) {
        this.productService.update(this.product).subscribe();
      }
      else {
        this.productService.save(this.product).subscribe({
          next: data => {
            this.products.push(data);       //this solution works for only 1 user (lower complexity)
          }
        });
      }
    }
    this.product = {} as Product;
    this.showForm = false;
    this.isEditing = false;
  }

  create() {
    this.showForm = true;
  }

  edit(product: Product) {
    this.product = product;
    this.showForm = true;
    this.isEditing = true;
  }

  delete(modal: any, product: Product) {
    this.deleteProduct = product;
    this.modalService.open(modal).result.then(
      (confirm) => {
        if (confirm) {
          this.productService.delete(product).subscribe({
            next: () => {
              this.products = this.products.filter(p => p.id !== product.id);
            }
          });
        }
      }
    );
  }

}
