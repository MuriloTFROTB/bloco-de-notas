import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewNotesHeaderComponent } from './new-notes-header.component';

describe('NewNotesHeaderComponent', () => {
  let component: NewNotesHeaderComponent;
  let fixture: ComponentFixture<NewNotesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewNotesHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewNotesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
