import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from 'src/app/models/category-dto';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = 'http://localhost:8080/api/v1/modules';
  private currentCategoryId: number | undefined;

  constructor(private http: HttpClient) { }

  setCurrentCategoryId(categoryId: number): void {
    this.currentCategoryId = categoryId;
  }

  getCurrentCategoryId(): number | undefined {
    return this.currentCategoryId;
  }

  getAllCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.baseUrl}/categories/all`);
  }

  getCategoryById(id: number): Observable<CategoryDTO> {
    return this.http.get<CategoryDTO>(`${this.baseUrl}/${id}`);
  }

  getCategoriesForModule(moduleId: number): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.baseUrl}/${moduleId}/categories`);
  }

  createCategory(category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.post<CategoryDTO>(`${this.baseUrl}/categories/create`, category);
  }

  updateCategory(id: number, category: CategoryDTO): Observable<CategoryDTO> {
    return this.http.put<CategoryDTO>(`${this.baseUrl}/categories/update/${id}`, category);
  }

  deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/categories/delete/${id}`);
  }

}
