import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../components/counter/models/product.model';
import { Category } from '@shared/components/counter/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient)

  constructor() { }

  getProducts(categoryId? : string ){
    const url = new URL('https://api.escuelajs.co/api/v1/products')
    if(categoryId){
      // aqui le estamos pasando el valor del params a la url si hay uno existente
      url.searchParams.set('categoryId', categoryId)
    }
    return this.http.get<Product[]>(url.toString())
  }
  getOne(id:string){
    return this.http.get<Product>(`https://api.escuelajs.co/api/v1/products/${id}`)

  }
  getCategory(){
    return this.http.get<Category[]>(`https://api.escuelajs.co/api/v1/categories`)

  }
}
