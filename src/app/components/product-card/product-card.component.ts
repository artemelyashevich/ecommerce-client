import { Component, Input } from '@angular/core';
import { ProductDto } from '../../model/product.model';
import { RouterLink } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink],
  templateUrl: './product-card.component.html',
  styles: ``
})
export class ProductCardComponent {
  @Input() product!: ProductDto

  constructor(
    private cartService: CartService
  ) { }

  public saveCart() {
    // this.cartService.saveCart().subscribe(data => {
    //   console.log(data);
    // }); 
  }
}
