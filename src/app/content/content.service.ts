import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Module } from './module';
import { Observable } from 'rxjs';
import { ModuleDto } from './module-dto';
import { Subject } from './subject';
import { SubjectDto } from './subject-dto';
import { Content } from './content';
import { ContentDto } from './content-dto';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  private apiUrl:string = 'http://localhost:8080'

  constructor(private http: HttpClient) { }

  getAllModules(): Observable<Module[]> {
    return this.http.get<Module[]>(`${this.apiUrl}/modules`);
  }
  createModule(module: ModuleDto): Observable<Module>{
    return this.http.post<Module>(`${this.apiUrl}/modules`, module);
  }
  updateModule(module: ModuleDto, id: number): Observable<Module>{
    return this.http.put<Module>(`${this.apiUrl}/modules/${id}`, module);
  }
  deleteModule(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/modules/${id}`);
  }
  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${this.apiUrl}/subjects`);
  }
  createSubject(subject: SubjectDto): Observable<Subject>{
    return this.http.post<Subject>(`${this.apiUrl}/subject`, subject);
  }
  getAllContent(): Observable<Content[]> {
    return this.http.get<Content[]>(`${this.apiUrl}/content`);
  }
  createContent(content: ContentDto): Observable<Content>{
    return this.http.post<Content>(`${this.apiUrl}/content`, content);
  }
  //TODO: Multimedia 

}
