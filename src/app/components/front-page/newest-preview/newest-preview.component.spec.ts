import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewestPreviewComponent } from './newest-preview.component';

describe('NewestPreviewComponent', () => {
  let component: NewestPreviewComponent;
  let fixture: ComponentFixture<NewestPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewestPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewestPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
