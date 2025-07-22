import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  lists = [
    {
      id: 1,
      title: 'Loan fix',
      icon: 'bi bi-currency-dollar',
      link: '/menu/loan1',
    },
    {
      id: 2,
      title: 'Loan fix principal',
      icon: 'bi bi-coin',
      link: '/menu/loan2',
    },
    {
      id: 3,
      title: 'Loan fix principal 3m',
      icon: 'bi bi-cash-coin',
      link: '/menu/loan3',
    },
    { id: 4, title: 'Scores', icon: 'bi bi-journal-album' },
    { id: 5, title: 'Teachers', icon: 'bi bi-person-workspace' },
    { id: 6, title: 'Class', icon: 'bi bi-buildings' },
    { id: 7, title: 'Member', icon: 'bi bi-person-vcard' },
    { id: 8, title: 'Log out', icon: 'bi bi-person', link: '/login' },
  ];

  currentLanguage: 'en' | 'km' = 'en';
  check: boolean = true;

  constructor(private router: Router, public themeService: ThemeService) {
    this.isLogin();
    this.changeLanguage();
  }

  isLogin() {
    let key;
    try {
      key = sessionStorage.getItem('loginKey');
    } catch {
      key = '';
    }
    setTimeout(() => {
      if (key != 'getKey') {
        this.router.navigateByUrl('/login');
      }
    }, 400);
  }

  switchLanguage(language: 'en' | 'km') {
    this.currentLanguage = language;
    this.changeLanguage();
  }

  changeLanguage() {
    const translation = {
      en: [
        'Loan fix',
        'Loan fix principal',
        'Loan principal 3m',
        'Scores',
        'Teachers',
        'Class',
        'Member',
        'Log out',
      ],
      km: [
        'ការប្រាក់ថេរ',
        'ការប្រាក់ថយ',
        'រំលោះ៣ខែម្ដង',
        'ពិន្ទុ',
        'គ្រូបង្រៀន',
        'ថ្នាក់',
        'គណនី',
        'ចាកចេញ',
      ],
    };

    translation[this.currentLanguage].map((text, index) => {
      this.lists[index].title = text;
    });
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
