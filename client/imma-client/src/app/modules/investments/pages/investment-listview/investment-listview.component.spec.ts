import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentListviewComponent } from './investment-listview.component';

describe('InvestmentListviewComponent', () => {
  let component: InvestmentListviewComponent;
  let fixture: ComponentFixture<InvestmentListviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentListviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InvestmentListviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
