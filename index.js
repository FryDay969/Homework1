/**
 * Block with variables and values of users map
 */


let salary = [];
let output;
const reducer = (previousValue, currentValue) => previousValue + currentValue;
const users = new Map();
users.set("1", { firstName: "Alice", earnings: 4000 });
users.set("2", { firstName: "Madison", earning: 0 });
users.set("3", { firstName: "Zaya", earnings: 12000 });
users.set("4", { firstName: "Brendon", earning: -1 });
users.set("5", { firstName: "Ted", donations : 15500 });
users.set("6", { firstName: "Brian" });
users.set("7", { firstName: "Zelda", earning: 20000 });
users.set("8", { firstName: "Brian", earning: null});
users.set("9", { firstName: "Brian", earning: 2000, earnings: 0});
users.set("10", { firstName: "Ted", earning: undefined});


const max = 10;
/**
 * Function assigned for generate random Integer number
 * @param {*} max Maximum amount of numbers
 * @returns Return Integer
 */
function getRandomInt(max) {
    let result = Math.floor(Math.random() * max);
    /**
     * Prevent assigning zero value in function 
     */
    if (result === 0){
      result = 1
    }
    return result
};

/**
 * Assigning a random length of array
 */
let randomAmountOfIDs = Array.from({length: getRandomInt(max)});
/**
 * Assigning a random value to each element of array 
 */

randomAmountOfIDs.forEach(()=>{
  randomAmountOfIDs.push(getRandomInt(max));
});


let inputIDs = randomAmountOfIDs.filter(Number);

/**
 * Calculations
 */
for(i=0;i<inputIDs.length;i++){
      let x = inputIDs[i];
      toString(x);
      let userObj = users.get(`${x}`);
      let numberArray = Object.values(userObj);
      salary.push(numberArray[1]);
      output = salary.reduce(reducer);
}

console.log("Input Array " + inputIDs)
console.log("Salary Sum " + output)
