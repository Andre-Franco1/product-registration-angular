import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '../../interfaces/Category';
import { Product } from '../../interfaces/Product';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  imports: [FormsModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class ProductComponent {

  @Input()
  categories : Category [] = [];

  @Input()
  product ?: Product;

  @Output()
  saveEmitter = new EventEmitter();

  save(){
    this.saveEmitter.emit();
  }
}
