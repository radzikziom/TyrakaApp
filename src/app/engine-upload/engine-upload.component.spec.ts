import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineUploadComponent } from './engine-upload.component';

describe('EngineUploadComponent', () => {
  let component: EngineUploadComponent;
  let fixture: ComponentFixture<EngineUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
