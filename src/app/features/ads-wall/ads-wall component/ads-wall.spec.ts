import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsWall } from './ads-wall';

describe('AdsWall', () => {
  let component: AdsWall;
  let fixture: ComponentFixture<AdsWall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdsWall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdsWall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
