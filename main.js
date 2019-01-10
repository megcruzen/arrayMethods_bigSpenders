/*

Produce a report that list only the companies that have placed an order for more than nine thousand dollars.

Use the filter method to get all the big spenders in the main array into a new one.

// Array to contain all the big spenders
const bigSpenders = businesses.filter(business => {

})
*/

const container = document.querySelector("#container")
container.innerHTML = "<h1>Big Spenders</h1>"

const bigSpenders = businesses.filter(business =>  business.orders.some(x => x > 9000));

console.log(bigSpenders);

bigSpenders.forEach(business => {
    container.innerHTML += `
      <div>${business.companyName}</div>
    `
  });


/*
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
*/
