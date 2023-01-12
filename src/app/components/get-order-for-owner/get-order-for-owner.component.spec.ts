import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderForOwnerComponent } from './get-order-for-owner.component';

describe('GetOrderForOwnerComponent', () => {
  let component: GetOrderForOwnerComponent;
  let fixture: ComponentFixture<GetOrderForOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetOrderForOwnerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetOrderForOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
