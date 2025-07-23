import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher',
  imports: [],
  templateUrl: './teacher.html',
  styleUrl: './teacher.css'
})
export class Teacher {
  teachers = [
    { id: 1, name: 'Mr. Chan', subject: 'Math' },
  { id: 2, name: 'Ms. Lina', subject: 'English' },
  { id: 3, name: 'Mr. Heng', subject: 'Science' },
  { id: 4, name: 'Ms. Rachana', subject: 'History' },
  { id: 5, name: 'Mr. Sovann', subject: 'Physics' },
  { id: 6, name: 'Ms. Sokny', subject: 'Biology' },
  { id: 7, name: 'Mr. Deth', subject: 'Chemistry' },
  { id: 8, name: 'Ms. Chanda', subject: 'Khmer' },
  { id: 9, name: 'Mr. Lim', subject: 'Geography' },
  { id: 10, name: 'Ms. Monika', subject: 'Computer' },
  { id: 11, name: 'Mr. Visal', subject: 'PE' },
  { id: 12, name: 'Ms. Nita', subject: 'Art' },
  { id: 13, name: 'Mr. Dara', subject: 'English' },
  { id: 14, name: 'Ms. Sokchea', subject: 'Math' },
  { id: 15, name: 'Mr. Kanha', subject: 'Music' },
  { id: 16, name: 'Ms. Vanna', subject: 'Drama' },
  { id: 17, name: 'Mr. Rithy', subject: 'ICT' },
  { id: 18, name: 'Ms. Leak', subject: 'Economics' },
  { id: 19, name: 'Mr. Kim', subject: 'Business' },
  { id: 20, name: 'Ms. Sina', subject: 'Psychology' }
  ];
}
