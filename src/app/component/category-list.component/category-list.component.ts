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
  /*constructor(private categoryService: CategoryService){
    this.getAll()
  }*/

  ngOnInit(): void {
    this.getAll();
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
