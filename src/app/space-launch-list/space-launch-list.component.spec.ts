import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceLaunchListComponent } from './space-launch-list.component';

describe('SpaceLaunchListComponent', () => {
  let component: SpaceLaunchListComponent;
  let fixture: ComponentFixture<SpaceLaunchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceLaunchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceLaunchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
