import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiurl: String = environment.apiurl;
  constructor(private http: HttpClient) {}

  fetchAllProducts(p0?: (response: any) => void, p1?: (error: any) => void) {
    return this.http.get(this.apiurl + '/product');
  }
}
