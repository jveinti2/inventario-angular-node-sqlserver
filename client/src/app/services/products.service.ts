import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from '../Interfaces/Product'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  API_URI= 'http://localhost:3000/api'

  constructor(private httpClient: HttpClient) {
    this.getAll()
   }

   getAll(){
    return this.httpClient.get(`${this.API_URI}/products`)
   }

   createOne(product: Product){
    return this.httpClient.post(`${this.API_URI}/products`, product)
   }
}
