import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModuleDTO } from 'src/app/models/module-dto';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {

  private baseUrl = 'http://localhost:8080/api/v1/modules';

  constructor(private http: HttpClient) { }

  getAllModules(): Observable<ModuleDTO[]> {
    return this.http.get<ModuleDTO[]>(`${this.baseUrl}/all`);
  }

  getModule(id: number): Observable<ModuleDTO> {
    return this.http.get<ModuleDTO>(`${this.baseUrl}/${id}`);
  }

  createModule(module: ModuleDTO): Observable<ModuleDTO> {
    return this.http.post<ModuleDTO>(`${this.baseUrl}/create`, module);
  }

  updateModule(id: number, module: ModuleDTO): Observable<ModuleDTO> {
    return this.http.put<ModuleDTO>(`${this.baseUrl}/update/${id}`, module);
  }

  deleteModule(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/delete/${id}`);
  }

}
