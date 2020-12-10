import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyDemandComponent } from './supply-demand.component';

describe('SupplyDemandComponent', () => {
  let component: SupplyDemandComponent;
  let fixture: ComponentFixture<SupplyDemandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplyDemandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplyDemandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
