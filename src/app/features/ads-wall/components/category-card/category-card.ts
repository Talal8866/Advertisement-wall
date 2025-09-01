import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-card',
  standalone: false,
  templateUrl: './category-card.html',
  styleUrl: './category-card.css'
})
export class CategoryCard {
  @Input() category!: { id: number, name: string, slug: string , color: string , emoji: string };

}
