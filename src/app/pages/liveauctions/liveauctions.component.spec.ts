import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveauctionsComponent } from './liveauctions.component';

describe('LiveauctionsComponent', () => {
  let component: LiveauctionsComponent;
  let fixture: ComponentFixture<LiveauctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveauctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveauctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
