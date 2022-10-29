import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooGlEComponent } from './goo-gl-e.component';

describe('GooGlEComponent', () => {
  let component: GooGlEComponent;
  let fixture: ComponentFixture<GooGlEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooGlEComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooGlEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
