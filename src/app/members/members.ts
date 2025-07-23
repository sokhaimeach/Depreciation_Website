import { Component } from '@angular/core';

@Component({
  selector: 'app-members',
  imports: [],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members {
  members = [
    {pic: 'images/profile.jpg',name: 'Meach Sokhai', school: 'Setec institute', address: 'Pailin', contact: '0123456789', skill: 'binggner coding'},
    {pic: 'images/makara.jpg',name: 'Hul Makara', school: 'Setec institute', address: 'Phnom Penh', contact: '0123456789', skill: 'binggner coding'},
    {pic: 'images/long.jpg',name: 'Hongly Long', school: 'Setec institute', address: 'Preyveng', contact: '0123456789', skill: 'binggner coding'},
    {pic: 'images/rayu.jpg',name: 'Va Rayu', school: 'Setec institute', address: 'Kompot', contact: '0123456789', skill: 'binggner coding'},
    {pic: 'images/somun.jpg',name: 'Oeun Somun', school: 'Setec institute', address: 'Kompot', contact: '0123456789', skill: 'binggner coding'}
  ];
}
