import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherComponentComponent } from './other-component.component';

describe('OtherComponentComponent', () => {
  let component: OtherComponentComponent;
  let fixture: ComponentFixture<OtherComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
