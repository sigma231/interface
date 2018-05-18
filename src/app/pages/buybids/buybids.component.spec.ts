import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybidsComponent } from './buybids.component';

describe('BuybidsComponent', () => {
  let component: BuybidsComponent;
  let fixture: ComponentFixture<BuybidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuybidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuybidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
