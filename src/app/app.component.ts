import { Component } from '@angular/core';
import products from './_files/products.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'natureaqua';
  public productList:{
    img:string,
    name:string,
    note:string,
    discription:string,
    discountPrice: number,
    price:number,
    status:string,
    stock:string,
    review:string
  }[] = products;
}
