import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan1',
  imports: [FormsModule, CommonModule],
  templateUrl: './loan1.html',
  styleUrl: './loan1.css'
})
export class Loan1 {

  principal = 2000;
  interestRate = 2;
  duration = 10;
  date = '2023-01-01';

  constructor() {
    this.calculate();
  }

  // design path
  data = [
    { name: 'Principal', value: this.principal, color: '#ffa9a9', icon: 'bi bi-currency-dollar' },
    { name: 'Interest Rate', value: this.interestRate, color: '#9797ff', icon: 'bi bi-percent' },
    { name: 'Duration', value: this.duration, color: '#85ff83', icon: 'bi bi-calendar' },
    { name: 'Date', value: this.date, color: '#ee97ff', icon: 'bi bi-calendar-date' }
  ];

  height = signal('50px');
  toggleHeight() {
    this.height.set(this.height() === '50px' ? '300px' : '50px');
  }



  // logic path
  loan: any[] = [];
  calculate() {
    const principal = this.principal / this.duration;
    const monthlyInterest = this.principal * this.interestRate / 100;
    const duration = this.duration;
    const increseDate = this.date.split('-');

    let year = Number(increseDate[0]);
    let month = (Number(increseDate[1]));
    let day = Number(increseDate[2])
    this.loan = [];
    for (let i = 0; i < this.duration; i++) {
      month++;
      year = month > 12 ? year + 1 : year;
      month = month > 12 ? 1 : month;

      this.loan[i] = {
        prin: principal,
        inter: monthlyInterest,
        durat: duration,
        date: `${year}-${month}-${day}`
      };
    }
  }

  getPrincial: string = '';
  getInterestRate: string = '';
  getDuration: string = '';
  getDate: string = '';
  editLoan() {
    this.principal = this.getPrincial == '' ? this.principal : Number(this.getPrincial);
    this.interestRate = this.getInterestRate == '' ? this.interestRate : Number(this.getInterestRate);
    this.duration = this.getDuration == '' ? this.duration : Number(this.getDuration);
    this.date = this.getDate == '' ? this.date : this.getDate;

    this.data[0].value = this.principal;
    this.data[1].value = this.interestRate;
    this.data[2].value = this.duration;
    this.data[3].value = this.date;
    this.calculate();
  }
}
