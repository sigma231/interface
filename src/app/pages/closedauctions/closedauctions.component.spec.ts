import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosedauctionsComponent } from './closedauctions.component';

describe('ClosedauctionsComponent', () => {
  let component: ClosedauctionsComponent;
  let fixture: ComponentFixture<ClosedauctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClosedauctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClosedauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
