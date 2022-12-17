import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicksortVisualizerComponent } from './quicksort-visualizer.component';

describe('QuicksortVisualizerComponent', () => {
  let component: QuicksortVisualizerComponent;
  let fixture: ComponentFixture<QuicksortVisualizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicksortVisualizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicksortVisualizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
