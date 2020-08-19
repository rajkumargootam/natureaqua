import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../products/products.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
  }

  addNewProduct(form){

    let newProduct= {
      id: 12,
      categoryId: form.value.product_category,
      productName: form.value.product_name,
      description: form.value.product_description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      img: form.value.img,
      stock: form.value.product_stock,
      vendor_name: form.value.product_vendor_name,
      review: form.value.product_reviews
    };
    console.log(newProduct);

this.productsService.createProduct(newProduct).subscribe(data => {
  console.log(data);
});
  }

}
