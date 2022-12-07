'use strict';
// ********************* Globals ****************************************

const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const globalSales = [0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let bigTotal = 0;
const main = document.querySelector('table');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('form');
// ****************** DRY Functions ****************************************

function createAppendWrite (element, parent, value = '') {
  let tempElement = document.createElement(element);
  tempElement.innerText = value;
  parent.appendChild(tempElement);
}

function createHeader () {
  let tableHeader = document.createElement('tr');
  createAppendWrite('th', tableHeader, 'Cities');
  main.prepend(tableHeader);
  for (let i = 0; i < hours.length; i++) {
    createAppendWrite('th', tableHeader, hours[i]);
  }
  createAppendWrite('th', tableHeader, 'Daily Location Totals');
}

function createFooter () {
  let tableFooter = document.createElement('tr');
  createAppendWrite('th', tableFooter, 'Hourly Totals');
  bigTotal = 0;
  for (let hour of globalSales) {
    bigTotal += hour;
    createAppendWrite('th', tableFooter, hour);
  }
  createAppendWrite('th', tableFooter, `Global Daily ${bigTotal}`);
  main.append(tableFooter);
}
// ****************************** Class Creation ************************

class Store {
  constructor (city, minCust, maxCust, avgSales) {
    this.city = city;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgSales = avgSales;
    this.storeHours = hours;
  }
  generateSales () {
    if (cities.indexOf(this) === -1) {
      cities.push(this);
    }
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
      createAppendWrite('td', list, `${this.hourlySales[i]}`);
    }
    createAppendWrite('td', list, `Total: ${this.totalSales}`);
  }
}
// ******************** Create Objects, Run Methods *****************************

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
// ************************* Render Labels ****************************************
createHeader();
createFooter();
// ****************************** Add Interactive Components ****************************************
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let tempStore = new Store (inputs[0].value, inputs[1].value, inputs[2].value, inputs[3].value);
  main.deleteRow(-1);
  tempStore.generateSales();
  tempStore.render();
  createFooter();
});
