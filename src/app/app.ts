import { Component, OnInit, signal } from '@angular/core';
import { Theme } from './core/services/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false,
})
export class App implements OnInit {
  protected readonly title = signal('advertisement-wall');

  constructor(private themeService: Theme) {}

  ngOnInit(): void {
    this.themeService.initializeTheme();
  }
}
