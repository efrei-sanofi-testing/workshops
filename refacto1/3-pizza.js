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

let data = { // clients
    "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
    "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
  }

const n = 3;
const y = 10;
let arr = []

for (let i = 0; i < Object.entries(data).length; i++) { // tant que i est plus petit que la longeur de l'objet avec les clients
    
    let cnt = 0;
    for (let j = 0; j < Object.entries(data)[i][1].length; j++) { // tant que j est plus petit que la longeur du tableau des commandes du client
        if(Object.entries(data)[i][1][j] >= y ) { // si la pizza est valide
            cnt++
        console.log("pizza valide!")    
        }}
    console.log("fin")
    if(cnt > n -1)  arr[arr.length] = Object.entries(data)[i][0] // si cnt est supérieur à n + 1, pizza gratuite
}

arr.sort()
console.log(arr)