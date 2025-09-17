import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeCtrlComponent } from './theme-ctrl.component';

describe('ThemeCtrlComponent', () => {
  let component: ThemeCtrlComponent;
  let fixture: ComponentFixture<ThemeCtrlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeCtrlComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThemeCtrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
