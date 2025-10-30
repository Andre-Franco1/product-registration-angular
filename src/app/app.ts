import { Component, signal } from '@angular/core';
import { HeaderComponent } from "./components/header/header";
import { FooterComponent } from "./components/footer/footer";
import { ProductsComponent } from "./components/products/products";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ProductsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('product-registration-angular');
}
