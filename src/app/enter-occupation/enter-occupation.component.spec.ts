import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterOccupationComponent } from './enter-occupation.component';

describe('EnterOccupationComponent', () => {
  let component: EnterOccupationComponent;
  let fixture: ComponentFixture<EnterOccupationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterOccupationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterOccupationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
