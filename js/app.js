'use strict';

//arrays with values for object properties

// var storeLocation = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
// var minCust = [23, 3, 11, 20, 2];
// var maxCust = [65, 24, 38, 38, 16];
// var cookieSale = [6.3, 1.2, 3.7, 2.3, 4.6];




// // random number generator with a min and max parameter

// var randNum = function randomSales(minCust, maxCust) {
//   minCust = Math.ceil(minCust);
//   maxCust = Math.floor(maxCust);
//   return Math.floor(Math.random() * (maxCust - minCust)+ 1) + minCust;
// };


// // object literal with an attempt at invoking random function after....

// var cookieStore = {
//   storeLocation: '1st and Pike',
//   minCust: 23,
//   maxCust: 65,
//   cookieSale: 6.3,
// };
// cookieStore.sales = function(){
//   return Math.floor(Math.random() * (maxCust - minCust) +1) + minCust;};



// // object for each store

// var storePike = {
//   minCust: 23,
//   maxCust: 65,
//   cookieSale: 6.3,
// };
// randomSales(storePike);
// console.log(randNum); 



// storePike.randomSales = function(){
//   alert(this);
// };


// console.log(randomSales);
// console.log(storePike);

// var storeSeatac = {
//   minCust: 3,
//   maxCust: 24,
//   cookieSale: 1.2
// }



// // object build for cookie store with properties inside
// var cookieStore = {
//   storeLocation:[0],
//   minCust:[0],
//   maxCust:[0],
//   cookieSale:[0]
// }

// console.log(cookieStore);

// // to rng the sales for each hour.
// function generateSales(){

// }


var allStores = [];
var storeTable = document.getElementById('store');
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function CookieStore(location, minCust, maxCust, avgCookie){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlySales = [];
  allStores.push(this);
}

CookieStore.prototype.random = function(){
  return Math.floor(Math.random() * (this.maxCust - this.minCust) + 1) + this.minCust;
};

CookieStore.prototype.genHourlySales = function() {
  for(var i = 0; i < storeHours.length; i++) {
    var customersPerHour = Math.round(this.random() * this.avgCookie);
    this.hourlySales.push(customersPerHour);
  }
};

CookieStore.prototype.renderHours = function() {
  for(var i = 0; i < storeHours.length; i++){
    var thEle = document.createElement('th');
    thEle.textContent = storeHours[i];
    storeTable.appendChild(thEle);
  }
};

CookieStore.prototype.renderSales = function(){
  var trEle = document.createElement('tr');
  for(var i = 0; i < this.hourlySales.length; i++){
    var tdEle = document.createElement('td');
    tdEle.textContent = this.hourlySales[i];
    trEle.appendChild(tdEle);
  }
  storeTable.appendChild(trEle);
};

var pike = new CookieStore('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStore('SeaTac Airport', 3, 24, 1.2);
var seaCenter = new CookieStore('Seattle Center', 11, 38, 3.7);
var capHill = new CookieStore('Capitol Hill', 20, 38, 2.7);
var alki = new CookieStore('Alki', 2, 16, 4.6);

pike.renderHours();

pike.genHourlySales();
seaTac.genHourlySales();
seaCenter.genHourlySales();
capHill.genHourlySales();
alki.genHourlySales();

pike.renderSales();
seaTac.renderSales();
seaCenter.renderSales();
capHill.renderSales();
alki.renderSales();

console.log(seaTac);