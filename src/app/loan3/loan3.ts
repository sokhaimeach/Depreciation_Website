import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loan3',
  imports: [FormsModule, CommonModule],
  templateUrl: '../loan1/loan1.html',
  styleUrl: '../loan1/loan1.css'
})
export class Loan3 {
  principal: number = 2000;
  interestRate: number = 2;
  duration: number = 10;
  date: string = '2023-01-01';
  totalLoan: number = 0;
  totalInterest: number = 0;

  constructor() {
    this.calculate();
  }

  // design path
  
  data = [
    { name: 'Principal', value: this.principal, color: '#653939ff', icon: 'bi bi-currency-dollar' },
    { name: 'Interest Rate', value: this.interestRate, color: '#665079ff', icon: 'bi bi-percent' },
    { name: 'Duration', value: this.duration, color: '#4c2954ff', icon: 'bi bi-calendar' },
    { name: 'Date', value: this.date, color: '#515588ff', icon: 'bi bi-calendar-date' }
  ];

  height = signal('50px');
  toggleHeight() {
    this.height.set(this.height() === '50px' ? '300px' : '50px');
  }
  header_color:string = '#754545ff';
  sub_tbl_color() {
    let arrcolor = [];
    for(let i=0;i<this.duration;i++){
      arrcolor[i] = i%2==0? 'white': '#a37272ff';
    }
    return arrcolor;
  }



  // logic path
  loan: any[] = [];
  calculate() {
    const principal = this.principal / this.duration;
    let newprincipal = this.principal;
    const duration = this.duration;
    const increseDate = this.date.split('-');
    let principal_per_month = 0;

    let year = Number(increseDate[0]);
    let month = (Number(increseDate[1]));
    let day = Number(increseDate[2])
    this.loan = [];
    for (let i = 0; i < this.duration; i++) {
      month++;
      year = month > 12 ? year + 1 : year;
      month = month > 12 ? 1 : month;

      let monthlyInterest = newprincipal * this.interestRate / 100;
      if((i+1)%3==1) {
        principal_per_month = (i==duration-1) ? principal*2 : 0;
        newprincipal -= principal_per_month;
      } else if((i+1)%3==2){
        principal_per_month = (i==duration-1) ? principal*1 : 0;
        newprincipal -= principal_per_month;
      } else {
        principal_per_month = principal * 3;
        newprincipal -= principal_per_month;
      }

      this.loan[i] = {
        prin: principal_per_month,
        inter: monthlyInterest,
        durat: duration,
        total: principal + monthlyInterest,
        date: `${year}-${month}-${day}`
      };
    }
    this.totalLoan = this.loan.reduce((sum, loan) => sum + loan.total, 0);
    this.totalInterest = this.totalLoan - this.principal;
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
