import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Genero } from '../models/genero';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  public obtenerTodos(): Observable<Genero[]> {
    return this.http.get<Genero[]>(`${this.apiURL}/todos`);
  }
}
