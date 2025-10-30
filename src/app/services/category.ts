import { Injectable } from '@angular/core';
import { Category } from '../interfaces/Category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {

  categories : Category [] = [
    {id : 1,name : 'In-House Production'},
    {id : 2,name : 'National'},
    {id : 3,name : 'Imported'},
    {id : 4,name : 'Premium'}
  ]
  
  getCategories() : Category[] {
    return this.categories;
  }
}
