'use strict';

// const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const hours = ['6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];
const globalSales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let bigTotal = 0;
console.log(hours);
const main = document.querySelector('table');

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
      let customersPerHour = Math.floor(Math.random() * ((this.maxCust - this.minCust)) + this.minCust);
      let cookiesPerHour = Math.floor(customersPerHour * this.avgSales);
      globalSales[i] += cookiesPerHour;
      sales.push(cookiesPerHour);
    }
    this.hourlySales = sales;
    this.totalSales = 0;
    for (let hour of this.hourlySales) {
      this.totalSales += hour;
    }
  }
  render () {
    let list = document.createElement('tr');
    main.appendChild(list);
    list.innerText = `${this.city}`;
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('td');
      list.appendChild(listItem);
      listItem.innerText = `${this.hourlySales[i]}`;
    }
    let listItem = document.createElement('td');
    list.appendChild(listItem);
    listItem.innerText = `Total: ${this.totalSales}`;
  }
}

const seattle = new Store('Seattle', 23, 65, 6.3);
const tokyo = new Store('Tokyo', 3, 24, 1.2);
const dubai = new Store('Dubai', 11, 38, 3.7);
const paris = new Store('Paris', 20, 38, 2.3);
const lima = new Store('Lima', 2, 16, 4.6);
const cities = [seattle, tokyo, dubai, paris, lima];
for (let city of cities) {
  city.generateSales();
  city.render();
}

let tableHeader = document.createElement('tr');
let emptyHeader = document.createElement('th');
tableHeader.appendChild(emptyHeader);
main.prepend(tableHeader);
for (let i = 0; i < hours.length; i++) {
  let columnHeader = document.createElement('th');
  columnHeader.innerText = hours[i];
  tableHeader.appendChild(columnHeader);
}
let totalHeader = document.createElement('th');
totalHeader.innerText = 'Daily Location Totals';
tableHeader.appendChild(totalHeader);


let tableFooter = document.createElement('tr');
let emptyFooter = document.createElement('th');
emptyFooter.innerText = 'Hourly Totals';
tableFooter.appendChild(emptyFooter);
for (let hour of globalSales) {
  bigTotal += hour;
  let columnFooter = document.createElement('th');
  columnFooter.innerText = hour;
  tableFooter.appendChild(columnFooter);
}
let totalFooter = document.createElement('th');
totalFooter.innerText = `Global Daily: ${bigTotal}`;
tableFooter.appendChild(totalFooter);
main.append(tableFooter);
