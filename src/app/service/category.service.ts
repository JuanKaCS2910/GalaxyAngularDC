import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../model/category';

@Service()
export class CategoryService {
  private uri='https://api.escuelajs.co/api/v1/categories'


  //constructor(private http: HttpClient){  }
  private http = inject(HttpClient); //DI

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(this.uri);
  }

  save(category: Category): Observable<Category> {
    return this.http.post<Category>(this.uri, category);
  }

}
