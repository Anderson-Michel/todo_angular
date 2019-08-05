import { Injectable } from '@angular/core';

import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tarefa } from '../interfaces/tarefa';

@Injectable({
  providedIn: 'root'
})
export class TarefaServicesService {
  private readonly url = "http://localhost:3000/tarefas";
  constructor(private http: HttpClient) { }

  list(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.url);
  }

  create(tarefa: Tarefa): Observable<Tarefa> {
    return !tarefa.id ?this.http.post<Tarefa>(this.url, tarefa)
              :this.http.put<Tarefa>(`${this.url}/${tarefa.id}`, tarefa);
  }

  edit(id: number): Observable<Tarefa> {
    return this.http.get<Tarefa>(`${this.url}/${id}`);
  }

  concluindo(tarefa: Tarefa): Observable<Tarefa> {
    return this.http.put<Tarefa>(`${this.url}/${tarefa.id}`, tarefa);
  }

}
