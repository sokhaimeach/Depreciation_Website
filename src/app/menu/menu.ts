import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu {
  links = [
    {link: '/menu/dashboard', title: 'Home', icon: 'bi bi-house'},
    {link: '/menu/loan1', title: 'Loan1', icon: 'bi bi-currency-dollar'},
    {link: '/menu/loan2', title: 'Loan2', icon: 'bi bi-coin'},
    {link: '/menu/loan3', title: 'Loan3', icon: 'bi bi-cash-coin'},
    {link: '/menu/dashboard', title: 'Description', icon: 'bi bi-journal-album'},
    {link: '/menu/dashboard', title: 'Dashboard', icon: 'bi bi-person-workspace'},
    {link: '/menu/dashboard', title: 'Dashboard', icon: 'bi bi-buildings'},
    {link: '/menu/members', title: 'Members', icon: 'bi bi-people'},
    {link: '/login', title: 'Log out', icon: 'bi bi-person'},
  ]

  col_update = signal('col-3 nav-update');
  col_data = signal('col-9 show-data');
  menu_display = signal('flex');

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

  
  activeLink:string[] = [];
  constructor() {
    try{
      this.activeLink = JSON.parse(sessionStorage.getItem('setActiveStatus') || "[]") || [];
    } catch{}
  }
  Active(index: number) {
    this.activeLink = [];
    this.activeLink[index] = 'active';
    sessionStorage.setItem('setActiveStatus', JSON.stringify(this.activeLink));
  }

  resizeHeight = signal('70px');
  ResizeMiniMenu() {
    this.resizeHeight.set(this.resizeHeight() === '70px' ? '90%' : '70px');
  }
}
