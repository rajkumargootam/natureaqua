import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
import { category } from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  getAllproducts(): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.get<Product>(productUrl); //return Observable

  }

  getCategories(): Observable<category>{
    const categoriesUrl = 'http://localhost:3000/categories';
    return this.httpClient.get<category>(categoriesUrl); //return Observable

  }

  createProduct(productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';
    return this.httpClient.post<Product>(productUrl,productBody); //return Observable

  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.get<Product>(productUrl); //return Observable

  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.put<Product>(productUrl,productBody); //return Observable

  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/product/'+productId;
    return this.httpClient.delete<Product>(productUrl); //return Observable

  }

  searchCategoryProduct(categoryId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/categoryId='+categoryId;
    return this.httpClient.get<Product>(productUrl); //return Observable

  }

  searchDateProduct(dateParam): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl); //return Observable

  }

}
