import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentEditingDialogComponent } from './document-editing-dialog.component';

describe('DocumentEditingDialogComponent', () => {
  let component: DocumentEditingDialogComponent;
  let fixture: ComponentFixture<DocumentEditingDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentEditingDialogComponent]
    });
    fixture = TestBed.createComponent(DocumentEditingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
