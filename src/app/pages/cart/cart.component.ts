import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartDto } from '../../model/cart.model';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styles: ``
})
export class CartComponent {

  data!: Array<CartDto>

  constructor(
    private cartService: CartService
  ) { }

  // FIXME
  ngOnInit() {
    this.cartService.findAll(1).subscribe(data => {
      this.data = data;
    });
  }
}
