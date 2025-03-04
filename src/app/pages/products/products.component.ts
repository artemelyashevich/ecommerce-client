import { Component } from '@angular/core';
import { ProductDto, ProductPage } from '../../model/product.model';
import { ProductService } from '../../services/product.service';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
import { PaginationComponent } from "../../components/pagination/pagination.component";
import { ProductCardComponent } from "../../components/product-card/product-card.component";

@Component({
  selector: 'app-products',
  imports: [SidebarComponent, PaginationComponent, ProductCardComponent],
  templateUrl: './products.component.html',
  styles: ``
})
export class ProductsComponent {
  data: Array<ProductDto> = []

  pagination = {
    totalPages: 0,
    totalElements: 0,
    last: false,
    size: 3,
    number: 0
  }

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productService.findAll(this.pagination.number, this.pagination.size).subscribe((data: ProductPage) => {
      this.setData(data)
    }
    )
  }

  fetchNextPage() {
    if (this.pagination.totalPages - 1 === this.pagination.number) {
      return
    }
    this.pagination.number++
    this.productService.findAll(this.pagination.number, this.pagination.size).subscribe((data: ProductPage) => {
      this.setData(data)
    }
    )
  }

  fetchPreviousPage() {
    if (this.pagination.number - 1 < 0) {
      return
    }
    this.pagination.number--
    this.productService.findAll(this.pagination.number, this.pagination.size).subscribe((data: ProductPage) => {
      this.setData(data)
    }
    )
  }

  private setData(data: ProductPage) {  
    this.data = data.content;
    this.pagination.number = data.page.number
    this.pagination.totalElements = data.page.totalElements
    this.pagination.totalPages = data.page.totalPages
  }

}
