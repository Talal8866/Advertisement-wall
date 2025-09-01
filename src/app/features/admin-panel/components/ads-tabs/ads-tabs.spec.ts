import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsTabs } from './ads-tabs';

describe('AdsTabs', () => {
  let component: AdsTabs;
  let fixture: ComponentFixture<AdsTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdsTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
