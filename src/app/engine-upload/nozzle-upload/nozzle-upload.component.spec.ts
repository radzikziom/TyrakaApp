import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NozzleUploadComponent } from './nozzle-upload.component';

describe('NozzleUploadComponent', () => {
  let component: NozzleUploadComponent;
  let fixture: ComponentFixture<NozzleUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NozzleUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NozzleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
