import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneMonyComponent } from './done-mony.component';

describe('DoneMonyComponent', () => {
  let component: DoneMonyComponent;
  let fixture: ComponentFixture<DoneMonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoneMonyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoneMonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
