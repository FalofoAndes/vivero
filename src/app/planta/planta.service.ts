import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from './planta';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private apiUrl: string = environment.baseUrl;
  
  constructor(private http: HttpClient) {}

  getPlantas(): Observable<Planta[]> {
    return this.http.get<Planta[]>(this.apiUrl);
  }

}
