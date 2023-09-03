import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-category-deletion-dialog',
  templateUrl: './category-deletion-dialog.component.html',
  styleUrls: ['./category-deletion-dialog.component.css']
})
export class CategoryDeletionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CategoryDeletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string
  ) { }

  onConfirm(): void {
    this.dialogRef.close(true); 
  }

  onCancel(): void {
    this.dialogRef.close(false); 
  }

}
