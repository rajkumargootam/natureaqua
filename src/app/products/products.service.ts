import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  createProduct(productBody){
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post(productUrl,productBody); //return Observanle

  }

  viewProduct(productId){
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.get(productUrl); //return Observanle

  }

  updateProduct(productId, productBody){
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.put(productUrl,productBody); //return Observanle

  }

  deleteProduct(productId){
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.delete(productUrl); //return Observanle

  }

  searchCategoryProduct(categoryId){
    const productUrl = 'http://localhost:3000/products/categoryId='+categoryId;
    return this.httpClient.get(productUrl); //return Observanle

  }

  searchDateProduct(dateParam){
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get(productUrl); //return Observanle

  }

}
