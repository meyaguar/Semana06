import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IIVA {
  idIVA: number;
  Detalle: string;
  Estado: string;
  Valor: number;
}

@Injectable({
  providedIn: 'root'
})
export class IVAService {
  apiurl = 'http://localhost/sexto-main/Proyectos/03MVC/controllers/iva.controller.php?op=';

  constructor(private http: HttpClient) {}

  // Método para obtener todos los IVA
  todos(): Observable<IIVA[]> {
    return this.http.get<IIVA[]>(this.apiurl + 'todos');
  }
}
