import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NnComponent } from './nn.component';

describe('NnComponent', () => {
  let component: NnComponent;
  let fixture: ComponentFixture<NnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
