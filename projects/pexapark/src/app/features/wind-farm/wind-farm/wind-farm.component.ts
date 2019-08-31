import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pp-wind-farm',
  templateUrl: './wind-farm.component.html',
  styleUrls: ['./wind-farm.component.scss'],
})
export class WindFarmComponent implements OnInit {

  navigation = [
    {link: 'chart', label: 'Chart'},
    {link: 'table', label: 'Table'}
  ];

  constructor() {
  }

  ngOnInit() {
  }
}
