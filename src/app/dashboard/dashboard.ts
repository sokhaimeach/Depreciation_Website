import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  constructor(private router: Router){
   this.isLogin();
    this.changeLanguage();
  }
  lists = [
    {id: 1, title: 'Couses', icon: 'bi bi-currency-dollar'},
    {id: 2, title: 'Schedule', icon: 'bi bi-coin'},
    {id: 3, title: 'Attendent', icon: 'bi bi-cash-coin'},
    {id: 4, title: 'Scores', icon: 'bi bi-journal-album'},
    {id: 5, title: 'Teachers', icon: 'bi bi-person-workspace'},
    {id: 6, title: 'Class', icon: 'bi bi-buildings'},
    {id: 7, title: 'Account', icon: 'bi bi-person-vcard'},
    {id: 8, title: 'Loign', icon: 'bi bi-person', link: '/login'}
  ]

  isLogin() {
    let key;
    try{
      key = sessionStorage.getItem('loginKey');
    } catch {
      key = '';
    }
    setTimeout(() => {
      if(key != 'getKey'){
        this.router.navigateByUrl('/login');
      }
    }, 400);
  }
 

  currentLanguage: 'en' | 'km' = 'en';
  check: boolean = true;
  switchLanguage(language: 'en' | 'km') {
    this.currentLanguage = language;
    this.changeLanguage();
  }
  changeLanguage() {
    const translation = {
      en: ['Couses', 'Schedule','Attendent','Scores','Teachers','Class','Account','Loign'],
      km: ['មេរៀន', 'កាលវិភាគ','វត្តមាន','ពិន្ទុ','គ្រូបង្រៀន','ថ្នាក់','គណនី','ចូលទៅ']
    }

    translation[this.currentLanguage].map((text, index) => {
      this.lists[index].title = text;
    });
  }

   theme = signal<'darkMode' | 'lightMode'>('lightMode');
  toggleTheme() {
    this.theme.update(them => them == 'lightMode' ? 'darkMode' : 'lightMode');
  }
}
