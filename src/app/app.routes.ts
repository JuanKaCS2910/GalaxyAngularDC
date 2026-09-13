import { Routes } from '@angular/router';
import { CategoryListComponent } from './component/category-list.component/category-list.component';
import { HomeComponent } from './component/home.component/home.component';
import { ProductListComponent } from './component/product-list.component/product-list.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: '*',
    redirectTo:'/home'
  }
];
