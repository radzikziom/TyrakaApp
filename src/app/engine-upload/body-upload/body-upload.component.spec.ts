import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyUploadComponent } from './body-upload.component';

describe('BodyUploadComponent', () => {
  let component: BodyUploadComponent;
  let fixture: ComponentFixture<BodyUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
