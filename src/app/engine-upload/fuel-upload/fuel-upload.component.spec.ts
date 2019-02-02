import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelUploadComponent } from './fuel-upload.component';

describe('FuelUploadComponent', () => {
  let component: FuelUploadComponent;
  let fixture: ComponentFixture<FuelUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
