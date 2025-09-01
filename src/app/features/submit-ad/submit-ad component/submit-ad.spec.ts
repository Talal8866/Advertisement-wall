import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitAd } from './submit-ad';

describe('SubmitAd', () => {
  let component: SubmitAd;
  let fixture: ComponentFixture<SubmitAd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmitAd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmitAd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
