import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Theme } from '../../../core/services/theme';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  
  theme;
  constructor(private themeService: Theme) {
    this.theme = this.themeService.currentTheme; 
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
