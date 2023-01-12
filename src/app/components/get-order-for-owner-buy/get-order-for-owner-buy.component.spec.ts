import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderForOwnerBuyComponent } from './get-order-for-owner-buy.component';

describe('GetOrderForOwnerBuyComponent', () => {
  let component: GetOrderForOwnerBuyComponent;
  let fixture: ComponentFixture<GetOrderForOwnerBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderForOwnerBuyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOrderForOwnerBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
