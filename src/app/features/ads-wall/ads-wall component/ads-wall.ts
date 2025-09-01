import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ads-wall',
  standalone: false,
  templateUrl: './ads-wall.html',
  styleUrl: './ads-wall.css'
})
export class AdsWall {
  constructor(private router: Router) { }

  categories = [
    { id: 1, name: 'التصميم والإبداع', slug: 'Design', color: '#7827BE', emoji: '🎨' },
    { id: 2, name: 'البرمجة والتقنية', slug: 'Tech', color: '#204BC2', emoji: '💻' },
    { id: 3, name: 'شركات التنظيف', slug: 'Cleaning', color: '#167A3C', emoji: '🧽' },
    { id: 4, name: 'المطاعم والمأكولات', slug: 'Food', color: '#AE3D10', emoji: '🍽️' },
    { id: 5, name: 'الإلكترونيات', slug: 'Electronics', color: '#3E36B6', emoji: '📱' },
    { id: 6, name: 'الطبية والصحة', slug: 'Health', color: '#AF1E1E', emoji: '🏥' },
    { id: 7, name: 'التعليم والتدريب', slug: 'Education', color: '#D49706', emoji: '📚' },
    { id: 8, name: 'السيارات والمركبات', slug: 'Vehicles', color: '#2C3644', emoji: '🚗' },
  ];

  navigateToCategory(slug: string) {
    this.router.navigate(['/category', slug]);
  }
}
