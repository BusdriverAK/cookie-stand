'use strict';

//arrays with values for object properties

var storeLocation = ['1st and Pike', 'SeaTac Airport', 'Seattle Center', 'Capitol Hill', 'Alki'];
var minCust = [23, 3, 11, 20, 2];
var maxCust = [65, 24, 38, 38, 16];
var cookieSale = [6.3, 1.2, 3.7, 2.3, 4.6];




// random number generator with a min and max parameter

var randNum = function randomSales(minCust, maxCust) {
  minCust = Math.ceil(minCust);
  maxCust = Math.floor(maxCust);
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;
};

var cookieStore = {
  storeLocation: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  cookieSale: 6.3,
};
cookieStore.sales = function(){
  return Math.floor(Math.random() * (maxCust - minCust)) + minCust;};



// object for each store

var storePike = {
  minCust: 23,
  maxCust: 65,
  cookieSale: 6.3,
};
randomSales(storePike);
console.log(randNum);



storePike.randomSales = function(){
  alert(this);
};


console.log(randomSales);
console.log(storePike);

var storeSeatac = {
  minCust: 3,
  maxCust: 24,
  cookieSale: 1.2
}









// object build for cookie store with properties inside
var cookieStore = {
  storeLocation:[0],
  minCust:[0],
  maxCust:[0],
  cookieSale:[0]
}

console.log(cookieStore);

// to rng the sales for each hour.
function generateSales(){

}