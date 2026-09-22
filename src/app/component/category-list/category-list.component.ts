import { Router } from '@angular/router';
import { Category } from '../../model/category';
import { CategoryService } from './../../service/category.service';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-category-list.component',
  styleUrl: './category-list.component.css',
  templateUrl: './category-list.component.html',
})
export class CategoryListComponent implements OnInit{


  //categories:Category[]=[]
  public categories = signal<Category[]>([]);

  private categoryService = inject(CategoryService)
  private router = inject(Router)
  /*constructor(private categoryService: CategoryService){
    this.getAll()
  }*/

  ngOnInit(): void {
    this.getAll();
  }

  new(){
    this.router.navigate(['categories/details'])
  }

  getAll(){
    this.categoryService.getAll().subscribe({
      next: (res) =>  {
        console.log(res)
        this.categories.set(res)
        //this.categories=res
      },
      error(err) {

      },
      complete() {

      },
    })
  }
}
