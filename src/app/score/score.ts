import { Component } from '@angular/core';

@Component({
  selector: 'app-score',
  imports: [],
  templateUrl: './score.html',
  styleUrl: './score.css'
})
export class Score {
  students = [
    { id: 1, name: 'Dara', score: 88 },
  { id: 2, name: 'Sokha', score: 92 },
  { id: 3, name: 'Vuthy', score: 75 },
  { id: 4, name: 'Sreyna', score: 90 },
  { id: 5, name: 'Rith', score: 67 },
  { id: 6, name: 'Vicheka', score: 77 },
  { id: 7, name: 'Pisey', score: 85 },
  { id: 8, name: 'Sophy', score: 73 },
  { id: 9, name: 'Borey', score: 79 },
  { id: 10, name: 'Chan', score: 94 },
  { id: 11, name: 'Makara', score: 81 },
  { id: 12, name: 'Kimsan', score: 69 }
  ];
}
