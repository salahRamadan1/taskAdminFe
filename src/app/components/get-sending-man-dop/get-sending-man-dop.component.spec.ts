import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetSendingManDopComponent } from './get-sending-man-dop.component';

describe('GetSendingManDopComponent', () => {
  let component: GetSendingManDopComponent;
  let fixture: ComponentFixture<GetSendingManDopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetSendingManDopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetSendingManDopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
