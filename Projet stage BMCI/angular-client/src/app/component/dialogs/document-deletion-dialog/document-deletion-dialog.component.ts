import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-document-deletion-dialog',
  templateUrl: './document-deletion-dialog.component.html',
  styleUrls: ['./document-deletion-dialog.component.css']
})
export class DocumentDeletionDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DocumentDeletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string
  ) { }

  confirm(): void {
    this.dialogRef.close(true);
  }

  cancel(): void {
    this.dialogRef.close(false);
  }

}
