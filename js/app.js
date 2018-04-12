'use strict';

var allStores = [];
var storeTable = document.getElementById('store');
var storeHours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];

//add property to object for cookies sold each hour and something for //total cookies. eventually print out total cookies as adding hourly //sales array position, similarly for other totals

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

CookieStore.prototype.genHourlySales = function(){
  for(var i = 0; i < storeHours.length; i++) {
    var customersPerHour = Math.round(this.random() * this.avgCookie);
    this.hourlySales.push(customersPerHour);
  }
};

CookieStore.prototype.renderHours = function(){
  var blankEle = document.createElement('td');
  storeTable.appendChild(blankEle);
  for(var i = 0; i < storeHours.length; i++){
    var thEle = document.createElement('th');
    thEle.textContent = storeHours[i];
    storeTable.appendChild(thEle);
  }
};

CookieStore.prototype.renderSales = function(){
  var trEle = document.createElement('tr');
  var tdEle = document.createElement('td');
  tdEle.textContent = this.location;
  trEle.appendChild(tdEle);
  for(var i = 0; i < this.hourlySales.length; i++){
    tdEle = document.createElement('td');
    tdEle.textContent = this.hourlySales[i];
    trEle.appendChild(tdEle);
  }
  storeTable.appendChild(trEle);
};

function handleStoreInput(event){
  event.preventDefault();
  console.log('form input recieved');
  var formEle = event.target;
  var newStore = new CookieStore(formEle.location.value, parseInt(formEle.minCust.value), parseInt(formEle.maxCust.value), parseFloat(formEle.avgCookie.value));
  console.log(newStore);
  newStore.genHourlySales();
  newStore.renderSales();
}

var newStoreEle = document.getElementById('add-store');
newStoreEle.addEventListener('submit', handleStoreInput);


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