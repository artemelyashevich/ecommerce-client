import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.component.html',
  styles: ``
})
export class PaginationComponent {
  @Input() pagination = {
    totalPages: 0,
    totalElements: 0,
    last: false,
    size: 6,
    number: 0
  }

  @Output() previousClicked = new EventEmitter<void>();  
  @Output() nextClicked = new EventEmitter<void>(); 


  getPagesArray(): number[] {
    return Array(this.pagination.totalPages).fill(0).map((_, i) => i);
  }

  onPreviousClick() {
    console.log('Previous button clicked');
    this.previousClicked.emit();
  }

  onNextClick() {
    console.log('Next button clicked');
    this.nextClicked.emit();
  }

  nextPage() {
    if (!this.pagination.last) {
      this.pagination.number++;
    }
  }
}
