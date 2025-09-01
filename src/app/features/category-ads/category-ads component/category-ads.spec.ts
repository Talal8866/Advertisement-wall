import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryAds } from './category-ads';

describe('CategoryAds', () => {
  let component: CategoryAds;
  let fixture: ComponentFixture<CategoryAds>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryAds]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryAds);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
