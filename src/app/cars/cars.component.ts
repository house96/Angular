import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Lada', 'Tesla'];
  dates = [
    new Date(2015, 3, 4).toDateString(),
    new Date(2011, 4, 1).toDateString(),
    new Date(2017, 2, 5).toDateString(),
  ];
  constructor() {
  }
  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

}
