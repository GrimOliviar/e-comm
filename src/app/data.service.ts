import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsSubject = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) {}

  setProducts(products: any[]): void {
    this.productsSubject.next(products);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>('/api/api/v1/products.json?brand=maybelline');
  }
}
