import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryDTO } from 'src/app/models/category-dto';
import { CategoryService } from 'src/app/services/category/category.service';
import { CategoryUpdateDialogComponent } from '../../dialogs/category-update-dialog/category-update-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDeletionDialogComponent } from '../../dialogs/category-deletion-dialog/category-deletion-dialog.component';
import { CategoryCreationDialogComponent } from '../../dialogs/category-creation-dialog/category-creation-dialog.component';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.css']
})
export class CategoryTableComponent implements OnInit {
  moduleId: number | null = null;
  categories: CategoryDTO[] = [];
  displayedColumns: string[] = ['id', 'name', 'description', 'action'];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.moduleId = Number(params.get('moduleId'));
      if (this.moduleId !== null) {
        this.loadCategories();
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getCategoriesForModule(this.moduleId!).subscribe(
      (categories: CategoryDTO[]) => {
        this.categories = categories;
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  viewDocuments(categoryId: number): void {
    this.router.navigate(['/admin', 'documents', categoryId]);
  }

  openCreateDialog(): void {
    const dialogRef = this.dialog.open(CategoryCreationDialogComponent, {
      width: '400px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(newCategory => {
      if (newCategory) {
        console.log('Nouvelle catégorie:', newCategory);
      }
    });
  }

  openUpdateDialog(category: CategoryDTO): void {
    const dialogRef = this.dialog.open(CategoryUpdateDialogComponent, {
      width: '400px',
      data: category
    });

    dialogRef.afterClosed().subscribe(updatedCategory => {
      if (updatedCategory) {
        this.categoryService.updateCategory(category.id, updatedCategory).subscribe(
          (response: CategoryDTO) => {
            console.log('Category updated successfully:', response);
          },
          (error) => {
            console.error('Error updating category:', error);
          });
        }
      });
    }

    deleteCategory(category: CategoryDTO): void {
      if (category.documents.length === 0) {
        const dialogRef = this.dialog.open(CategoryDeletionDialogComponent, {
          width: '300px',
          data: 'Are you sure you want to delete this category?'
        });

        dialogRef.afterClosed().subscribe(result => {
          if (result) {
            this.categoryService.deleteCategory(category.id).subscribe(
            () => {
              console.log('Category deleted successfully');
            },
            (error) => {
              console.error('Error deleting category:', error);
            });
          }
        });
      } else {
        console.log('Category cannot be deleted as it contains documents');
      }
    }

}
