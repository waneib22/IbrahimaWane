import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CategoryDTO } from 'src/app/models/category-dto';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnChanges {
  @Input() moduleId: number | null = null;
  categories: CategoryDTO[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes["moduleId"] && this.moduleId !== null) {
      this.loadCategories();
    }
  }

  loadCategories(): void {
    if (this.moduleId !== undefined) {
      this.categoryService.getCategoriesForModule(this.moduleId!).subscribe(
        (categories: CategoryDTO[]) => {
          this.categories = categories;
        },
        (error) => {
          console.error('Error fetching categories:', error);
        }
      );
    }
  }
}
