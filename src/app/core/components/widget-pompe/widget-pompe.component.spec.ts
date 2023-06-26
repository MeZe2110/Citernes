import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPompeComponent } from './widget-pompe.component';

describe('WidgetPompeComponent', () => {
  let component: WidgetPompeComponent;
  let fixture: ComponentFixture<WidgetPompeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WidgetPompeComponent]
    });
    fixture = TestBed.createComponent(WidgetPompeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
