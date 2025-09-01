import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdCard } from './ad-card';

describe('AdCard', () => {
  let component: AdCard;
  let fixture: ComponentFixture<AdCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
