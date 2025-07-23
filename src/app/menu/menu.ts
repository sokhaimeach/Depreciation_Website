// menu.ts
import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  links = [
    { link: '/menu/dashboard', title: 'Home', icon: 'bi bi-house' },
    { link: '/menu/loan1', title: 'Loan1', icon: 'bi bi-currency-dollar' },
    { link: '/menu/loan2', title: 'Loan2', icon: 'bi bi-coin' },
    { link: '/menu/loan3', title: 'Loan3', icon: 'bi bi-cash-coin' },
    { link: '/menu/score', title: 'Score', icon: 'bi bi-journal-album' },
    { link: '/menu/teacher', title: 'Teacher', icon: 'bi bi-person-workspace' },
    { link: '/menu/classes', title: 'Class', icon: 'bi bi-buildings' },
    { link: '/menu/members', title: 'Members', icon: 'bi bi-people' },
    { link: '/login', title: 'Log out', icon: 'bi bi-person' },
  ];

  col_update = signal('col-3 nav-update');
  col_data = signal('col-9 show-data');
  menu_display = signal('flex');
  resizeHeight = signal('70px');
  activeLink: string[] = [];

  constructor(public themeService: ThemeService) {
    try {
      this.activeLink = JSON.parse(sessionStorage.getItem('setActiveStatus') || "[]") || [];
    } catch (e) {
      console.error('Error parsing active link state:', e);
      this.activeLink = [];
    }
  }

  Resize() {
    if (this.col_update() == 'col-3 nav-update') {
      this.col_update.set('col-1 nav-update');
      this.col_data.set('col-11 show-data');
      this.menu_display.set('none');
    } else {
      this.col_update.set('col-3 nav-update');
      this.col_data.set('col-9 show-data');
      this.menu_display.set('flex');
    }
  }

  Active(index: number) {
    this.activeLink = [];
    this.activeLink[index] = 'active';
    try {
      sessionStorage.setItem('setActiveStatus', JSON.stringify(this.activeLink));
    } catch (e) {
      console.error('Error saving active link state:', e);
    }
  }

  ResizeMiniMenu() {
    this.resizeHeight.set(this.resizeHeight() === '70px' ? '90%' : '70px');
  }
}