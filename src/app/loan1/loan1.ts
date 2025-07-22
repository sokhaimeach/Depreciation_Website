import { CommonModule } from '@angular/common';
import { Component, signal, effect } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-loan1',
  imports: [FormsModule, CommonModule],
  templateUrl: './loan1.html',
  styleUrl: './loan1.css'
})
export class Loan1 {

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
  loan_title: string = 'Depreciation Fix'
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
  header_color:string = 'rgb(95, 95, 255)';
  sub_tbl_color() {
    let arrcolor = [];
    for(let i=0;i<this.duration;i++){
      arrcolor[i] = i%2==0? 'rgb(255, 255, 255)': '#9797ff';
    }
    return arrcolor;
  }
  msg_top: string = '-100px';
  clearMessage() {
    this.msg_top = '-100px'
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

    // alert success message
    if((this.getPrincial || this.getInterestRate || this.getDuration || this.getDate) != '') {
      const radio = new Audio()
      radio.src = 'images/message_sound.mp3';
      radio.play();
      this.msg_top = '20px';
    }
  }

  generatePDF() {
    const element = document.getElementById('content');
    
    if(!element) return;
    html2canvas(element, {scale: 3, useCORS: true}).then((canvas) => {
      const pdf = new jsPDF('landscape', 'mm', 'a4');
      const img = canvas.toDataURL('image/png');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight);
      // pdf.setProperties({
      //   title: 'Loan depreciation'
      // })
      // pdf.setFontSize(12);
      // pdf.text('sokhai meach', 14, 22);

      pdf.save('depreciation.pdf');
    })
  }
}
