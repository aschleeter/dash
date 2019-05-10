import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainRiskComponent } from './domain-risk.component';

describe('DomainRiskComponent', () => {
  let component: DomainRiskComponent;
  let fixture: ComponentFixture<DomainRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
