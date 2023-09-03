import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DocumentDTO } from 'src/app/models/document-dto';

@Component({
  selector: 'app-document-editing-dialog',
  templateUrl: './document-editing-dialog.component.html',
  styleUrls: ['./document-editing-dialog.component.css']
})
export class DocumentEditingDialogComponent {

  documentForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DocumentEditingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DocumentDTO
  ) {
    this.documentForm = this.formBuilder.group({
      documentName: [data.documentName, Validators.required],
    });
  }

  saveChanges(): void {
    if (this.documentForm.valid) {
      const updatedDocument: DocumentDTO = {
        ...this.data,
        documentName: this.documentForm.value.documentName,
      };
      this.dialogRef.close(updatedDocument);
    }
  }

  cancel(): void {
    this.dialogRef.close();
  }
}
