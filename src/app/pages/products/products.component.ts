import { Component } from '@angular/core';
import { ProductDto } from '../../model/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent {
  data: Array<ProductDto> = []

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.findAll().subscribe((data: Array<ProductDto>) => {
      this.data = data;
    }
  )}
}
