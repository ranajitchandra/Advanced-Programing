"use strict";
// array, object
// typescript gives toople, it is receive 2 values
Object.defineProperty(exports, "__esModule", { value: true });
let list = ["1", "2", "3"];
let lis2 = [1, 2, 3, 4];
let mixed = ["1", "2", 1, 2];
// toople
let coordinates = [12, 23];
let nameAndRoll = ["Rono", 24];
let destination = ["dhaka", "sylhet", 2];
// refarence type : object
const user = {
    userName: "Rono",
    userName2: "Ranajit",
    roll: 24,
    age: 12
};
// arrow function, normal function
function addRegularFn(num1, num2) {
    return num1 + num2;
}
console.log(addRegularFn(1, 2));
const add = (num1, num2) => num1 + num2;
console.log(add(10, 20));
const obj = {
    some: 5,
    result: "Total",
    finally(num1, num2) {
        return this.some + num1 + num2;
    }
};
console.log(obj.finally(50, 90));
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest";
    }
};
console.log(getDashboard("admin"));
//# sourceMappingURL=nonPrimitiveData.js.map