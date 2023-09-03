import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentDeletionDialogComponent } from './document-deletion-dialog.component';

describe('DocumentDeletionDialogComponent', () => {
  let component: DocumentDeletionDialogComponent;
  let fixture: ComponentFixture<DocumentDeletionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentDeletionDialogComponent]
    });
    fixture = TestBed.createComponent(DocumentDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
