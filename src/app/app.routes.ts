import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { CategoriesComponent } from './components/categories/categories';
import { ProductsComponent } from './components/products/products';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'product', component: ProductsComponent },
    { path: 'category', component: CategoriesComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
];
