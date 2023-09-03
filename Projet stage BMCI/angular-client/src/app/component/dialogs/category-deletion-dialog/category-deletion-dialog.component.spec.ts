import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryDeletionDialogComponent } from './category-deletion-dialog.component';

describe('CategoryDeletionDialogComponent', () => {
  let component: CategoryDeletionDialogComponent;
  let fixture: ComponentFixture<CategoryDeletionDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryDeletionDialogComponent]
    });
    fixture = TestBed.createComponent(CategoryDeletionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
