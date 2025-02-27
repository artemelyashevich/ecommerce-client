import { Component } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CategoryDto } from '../../model/category.model';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {
  items: Array<CategoryDto> = []

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.categoryService.findAll().subscribe(
      (response) => {
         this.items = response; 
        }
    )
  }
}
