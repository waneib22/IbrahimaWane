import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryCreationDialogComponent } from './category-creation-dialog.component';

describe('CategoryCreationDialogComponent', () => {
  let component: CategoryCreationDialogComponent;
  let fixture: ComponentFixture<CategoryCreationDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryCreationDialogComponent]
    });
    fixture = TestBed.createComponent(CategoryCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
