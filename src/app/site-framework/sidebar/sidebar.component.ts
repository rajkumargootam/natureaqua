import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';
import { category } from '../category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

categoryList: category;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe(data => {
      this.categoryList = data;
    })
  }

}
