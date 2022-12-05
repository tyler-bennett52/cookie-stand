'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
console.log(hours);
const main = document.querySelector('main');

class Store {
  constructor (city, minCust, maxCust, avgSales) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSales = avgSales;
    this.storeHours = hours;
  }
  generateSales () {
    const sales = [];
    for (let i = 0; i < hours.length; i++) {
      let cookiesPerHour = Math.floor(Math.random() * ((this.maxCust - this.minCust) + 1) * this.avgSales);
      sales.push(cookiesPerHour);
    }
    this.hourlySales = sales;
    this.totalSales = 0;
    for (let hour of this.hourlySales) {
      this.totalSales += hour;
    }
  }
  render () {
    let list = document.createElement('ul');
    main.appendChild(list);
    list.innerText = `${this.city}`;
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      list.appendChild(listItem);
      listItem.innerText = `${hours[i]}: ${this.hourlySales[i]}`;
    }
    let listItem = document.createElement('li');
    list.appendChild(listItem);
    listItem.innerText = `Total: ${this.totalSales}`;
  } 
}

const seattle = new Store('Seatle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);
seattle.generateSales();
tokyo.generateSales();
dubai.generateSales();
paris.generateSales();
lima.generateSales();

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
