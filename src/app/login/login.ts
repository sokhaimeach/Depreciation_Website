import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  combine: string = '';
  count: number = 0;
  checked: any[] = [];
  iswrong: string = 'none';

  load: string = 'none';
  lose: string = 'flex';

  constructor(private router: Router){}

  combineString(num: string) {
    this.combine += num;
    this.count++;
    this.iswrong = 'none';
    this.checkDot(this.count);
  }

  checkDot(count: number) {
    this.checked.push('white');
    if (count == 6) {
      this.checkPass();
      setTimeout(() => this.clearPassword(), 500);
    }
  }

  checkPass() {
    if (this.combine == '999999') {
      this.load = 'flex';
      setTimeout(() => {
        sessionStorage.setItem('loginKey', 'getKey')
        this.router.navigate(['/menu']);
      }, 3000);
    } else {
      this.iswrong = 'block';
    }
  }

  clearPassword() {
    this.checked = [];
    this.count = 0;
    this.combine = '';
    this.iswrong = 'none';
  }

  deletePass() {
    if (this.count == 0) return;
    this.checked.pop();
    const copy = this.combine.split('');
    this.combine = '';
    for(let i = 0; i < copy.length - 1; i++) {
      this.combine += copy[0];
    }
    this.count--;
    this.iswrong = 'none';
  }
}
