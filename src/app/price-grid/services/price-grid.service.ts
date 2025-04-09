import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PriceGrid } from '../model/price-grid.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceGridService {

  private baseUrl = 'http://localhost:8080/api/price-grid';

  constructor(private http: HttpClient) {}
  getAll(): Observable<PriceGrid[]> {
    return this.http.get<PriceGrid[]>(this.baseUrl);
  }

  create(priceGrid: PriceGrid): Observable<any> {
    return this.http.post(`${this.baseUrl}/createPriceGrid`,priceGrid);
  }
}
