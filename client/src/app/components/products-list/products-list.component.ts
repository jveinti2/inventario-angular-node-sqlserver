import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
  products: any;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.productsService.getAll().subscribe(
      (res) => {
        this.products = res;
      },
      (err) => console.error(err)
    );
  }
}
