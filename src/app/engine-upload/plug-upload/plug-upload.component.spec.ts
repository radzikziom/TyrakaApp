import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlugUploadComponent } from './plug-upload.component';

describe('PlugUploadComponent', () => {
  let component: PlugUploadComponent;
  let fixture: ComponentFixture<PlugUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlugUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlugUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
