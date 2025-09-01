import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Theme {
private isDark = signal(true); 

  toggleTheme(): void {
    const newValue = !this.isDark();
    this.isDark.set(newValue);

    // اضبط data-theme على html
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');

    // كلاس dark على body اختياري - ممكن تستغني عنه لو استخدمت CSS بـ data-theme فقط
    document.body.classList.toggle('dark', newValue);

    // خزّن القيمة
    localStorage.setItem('theme', newValue ? 'dark' : 'light');
  }

  initializeTheme(): void {
    const saved = localStorage.getItem('theme');
    const dark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    this.isDark.set(dark);

    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    document.body.classList.toggle('dark', dark);
  }

  get currentTheme() {
    return this.isDark.asReadonly();
  }
}
