import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { ProductDto } from '../../model/product.model';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent {

  productId!: string;
  product!: ProductDto;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id')!;
    this.productService.findById(this.productId).subscribe((data: ProductDto) => {
      this.product = data;
    })    
  }
}
