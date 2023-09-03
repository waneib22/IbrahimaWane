import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { DocumentDTO } from 'src/app/models/document-dto';
import { DocumentService } from 'src/app/services/document/document.service';
import { DocumentEditingDialogComponent } from '../../dialogs/document-editing-dialog/document-editing-dialog.component';
import { DocumentDeletionDialogComponent } from '../../dialogs/document-deletion-dialog/document-deletion-dialog.component';

@Component({
  selector: 'app-document-table',
  templateUrl: './document-table.component.html',
  styleUrls: ['./document-table.component.css']
})
export class DocumentTableComponent implements OnInit {

  categoryId: number = 0;
  documents: DocumentDTO[] = [];

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const categoryIdParams = params['categoryId'];
      this.categoryId = categoryIdParams;
      this.loadDocuments(categoryIdParams);
    });
  }

  loadDocuments(categoryId: number): void {
    this.documentService.getDocumentsForCategory(categoryId)
      .subscribe(documents => {
        this.documents = documents;
      });
  }

  downloadDocument(fileCode: string): void {
    this.documentService.downloadDocument(fileCode)
      .subscribe(response => {
        const contentDispositionHeader = response.headers.get('content-disposition');
        const contentTypeHeader = response.headers.get('content-type');

        console.log('Content Disposition:', contentDispositionHeader);
        console.log('Content Type:', contentTypeHeader);
      
        if (contentDispositionHeader && contentTypeHeader) {
          const contentType = contentTypeHeader;
          const blob = new Blob([response.body as BlobPart], { type: contentType });
          const filename = this.getFilenameFromContentDisposition(contentDispositionHeader);          

          if (blob && filename) {
            const link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = filename;
            link.click();
          }
        }
      }, 
      (error) => {
        console.error('Error downloading document:', error);
        
      }
    );
  }

  getFilenameFromContentDisposition(contentDisposition: string): string | null {
    const filenameMatch = contentDisposition.match(/filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/);
    if (filenameMatch && filenameMatch[1]) {
      const decodedFilename = decodeURIComponent(filenameMatch[1]);
      return decodedFilename.replace(/['"]/g, ''); // Remove surrounding quotes if any
    }
    return null;
  }

  openEditDialog(document: DocumentDTO): void {
    const dialogRef = this.dialog.open(DocumentEditingDialogComponent, {
      width: '400px',
      data: document
    });
  
    dialogRef.afterClosed().subscribe(updatedDocument => {
      if (updatedDocument) {
      }
    });
  }

  deleteDocument(document: DocumentDTO): void {
    const dialogRef = this.dialog.open(DocumentDeletionDialogComponent, {
      width: '300px',
      data: 'Êtes-vous de vouloir supprimer ce document?'
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.documentService.deleteDocumentById(document.id).subscribe(
          () => {
            console.log('Document deleted successfully');
            this.loadDocuments(this.categoryId);
          },
          (error) => {
            console.error('Error deleting document:', error);
          }
        );
      }
    });
  }

}
