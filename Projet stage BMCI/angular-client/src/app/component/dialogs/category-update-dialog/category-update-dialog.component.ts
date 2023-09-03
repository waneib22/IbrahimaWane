import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoryDTO } from 'src/app/models/category-dto';

@Component({
  selector: 'app-category-update-dialog',
  templateUrl: './category-update-dialog.component.html',
  styleUrls: ['./category-update-dialog.component.css']
})
export class CategoryUpdateDialogComponent {

  updatedCategory: CategoryDTO = { id: 0, name: '', description: '', moduleId: 0, documents: [] };

  constructor(
    public dialogRef: MatDialogRef<CategoryUpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CategoryDTO
  ) {
    this.updatedCategory = { ...data };
  }

  updateCategory(): void {
    this.dialogRef.close(this.updatedCategory);
  }

}
