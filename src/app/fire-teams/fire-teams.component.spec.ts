import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireTeamsComponent } from './fire-teams.component';

describe('FireTeamsComponent', () => {
  let component: FireTeamsComponent;
  let fixture: ComponentFixture<FireTeamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireTeamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
