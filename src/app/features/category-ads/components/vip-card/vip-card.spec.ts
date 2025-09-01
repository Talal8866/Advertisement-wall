import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VipCard } from './vip-card';

describe('VipCard', () => {
  let component: VipCard;
  let fixture: ComponentFixture<VipCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VipCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VipCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
