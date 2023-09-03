import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-creation-dialog',
  templateUrl: './category-creation-dialog.component.html',
  styleUrls: ['./category-creation-dialog.component.css']
})
export class CategoryCreationDialogComponent {

  categoryForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CategoryCreationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  createCategory(): void {
    console.log('createCategory() called');
    if (this.categoryForm.valid) {
      const newCategory = {
        name: this.categoryForm.value.name,
        description: this.categoryForm.value.description
      };

      this.dialogRef.close(newCategory);
    }
  }
}
