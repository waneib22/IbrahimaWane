import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoryDTO } from 'src/app/models/category-dto';
import { DocumentDTO } from 'src/app/models/document-dto';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private baseUrl = 'http://localhost:8080/api/v1/modules/categories';

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/documents/all`);
  }

  getAllCategories(): Observable<CategoryDTO[]> {
    return this.http.get<CategoryDTO[]>(`${this.baseUrl}/all`);
  }

  getAllDocumentsSortedByCreationDate(): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/documents/all/sorted-by-date-created`);
  }

  getAllDocumentsSortedByCategoryAndName(): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/documents/all/sorted-by-category-and-name`);
  }

  getDocumentById(id: number): Observable<DocumentDTO> {
    return this.http.get<DocumentDTO>(`${this.baseUrl}/documents/${id}`);
  }

  getDocumentsForCategory(categoryId: number): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/${categoryId}/documents`);
  }

  getAllDocumentsSortedByCreationDateAsc(categoryId: number): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/${categoryId}/documents/sorted-by-date-created-asc`);
  }

  getAllDocumentsSortedByCreationDateDesc(categoryId: number): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/${categoryId}/documents/sorted-by-date-created-desc`);
  }

  getAllDocumentsSortedByDocumentNameAsc(categoryId: number): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/${categoryId}/documents/sorted-by-document-name-asc`);
  }

  getAllDocumentsSortedByDocumentNameDesc(categoryId: number): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/${categoryId}/documents/sorted-by-document-name-desc`);
  }

  searchDocumentsByKeyword(categoryId: number, keyword: string): Observable<DocumentDTO[]> {
    return this.http.get<DocumentDTO[]>(`${this.baseUrl}/${categoryId}/documents/search?keyword=${keyword}`);
  }

  updateDocument(id: number, document: DocumentDTO): Observable<DocumentDTO> {
    return this.http.put<DocumentDTO>(`${this.baseUrl}/documents/update/${id}`, document);
  }

  deleteDocumentById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/documents/delete/${id}`);
  }

  uploadDocument(document: File, categoryId: number): Observable<DocumentDTO> {
    const formData = new FormData();
    formData.append('document', document);
    formData.append('categoryId', categoryId.toString());

    return this.http.post<DocumentDTO>(`${this.baseUrl}/documents/upload`, formData);
  }

  downloadDocument(fileCode: string): Observable<HttpResponse<Blob>> {
    return this.http.get(`${this.baseUrl}/documents/download/${fileCode}`, {
      responseType: 'blob',
      observe: 'response' 
    });
  }

}
