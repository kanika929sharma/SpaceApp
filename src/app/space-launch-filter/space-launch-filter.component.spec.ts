import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLaunchFilterComponent } from './space-launch-filter.component';

describe('SpaceLaunchFilterComponent', () => {
  let component: SpaceLaunchFilterComponent;
  let fixture: ComponentFixture<SpaceLaunchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceLaunchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLaunchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
