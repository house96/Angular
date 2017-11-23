import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  template: `

    <h2>Single Car</h2>
    <p>lorem ipsum</p>
    `,
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
