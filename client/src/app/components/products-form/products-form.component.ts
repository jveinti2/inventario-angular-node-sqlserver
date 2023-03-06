import { Component } from '@angular/core';
import { Product } from '../../Interfaces/Product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css'],
})
export class ProductsFormComponent {
  product: Product = {
    id_ref: '',
    title: '',
    description: '',
    category: '',
    price: 0,
  };

  constructor(private productsService: ProductsService) {}

  createOne(product: Product) {
    this.productsService.createOne(product).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => console.error(err)
    );
  }
}
