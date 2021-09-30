import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFileSizeFormatterMbComponent } from './ngx-file-size-formatter-mb.component';

describe('NgxFileSizeFormatterMbComponent', () => {
  let component: NgxFileSizeFormatterMbComponent;
  let fixture: ComponentFixture<NgxFileSizeFormatterMbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxFileSizeFormatterMbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFileSizeFormatterMbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
