/*
Google is launching a network of autonomous pizza delivery drones and wants you to create a flexible
rewards system (Pizza Points™) that can be tweaked in the future.
The rules are simple: if a customer has made at least N orders of at least Y price, they get a FREE pizza!

Create a function that takes an object of customers,
a minimum number of orders and a minimum order price.
Return an array of customers that are eligible for a free pizza.

️Sort the returned array of customer names in alphabetical order

Source : https://edabit.com/challenge/raWPf5nZyRKEEH6ZQ
*/

function clientHistAllowGiftedPizza(client) {
  let nbValidPizza = ClientsHistories[client];
  nbValidPizza = nbValidPizza.filter(
    (pizzaPrice) => pizzaPrice >= minPizzaPrice
  );
  nbValidPizza = nbValidPizza.length;

  return nbValidPizza >= 3 ? true : false;
}

let ClientsHistories = {
  // clients
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
  Batman: [22, 30, 11, 17, 15, 52, 27, 12],
  Ironman: [2, 3, 1, 7, 15, 2, 7, 12],
  Tor: [22, 30, 11, 7, 15, 2, 27, 12],
};
let y = "";
const quotaPizza = 3;
const minPizzaPrice = 10;
let arr = [];
let giftedClients = Object.keys(ClientsHistories).reduce(
  (eligibleClients, client) => {
    eligibleClients[client] = clientHistAllowGiftedPizza(client);
    return eligibleClients;
  },
  {}
);
console.log("giftedClients", giftedClients);

giftedClients = Object.keys(giftedClients).filter((it) => giftedClients[it]);
giftedClients.sort();
console.log(giftedClients);
