// array, object
// typescript gives toople, it is receive 2 values

let list: string[] = ["1", "2", "3"]
let lis2: number[] = [1, 2, 3, 4]
let mixed: (string | number)[] = ["1", "2", 1, 2]

// toople
let coordinates: [number, number] = [12, 23]
let nameAndRoll: [string, number] = ["Rono", 24]
let destination: [string, string, number] = ["dhaka", "sylhet", 2]


// refarence type : object

const user: {
    userName: "Rono"; // fixed type. litarel type
    readonly userName2: string; // same like litarel, acccess modifire
    roll: number;
    age?: number // optional typenode 
} = {
    userName: "Rono",
    userName2: "Ranajit",
    roll: 24,
    age: 12
}


// arrow function, normal function

function addRegularFn (num1: number, num2: number) : number {
    return num1 + num2
}

console.log(addRegularFn(1,2));

const add = (num1: number, num2: number): number => num1+num2

console.log(add(10,20));

const obj = {
    some: 5,
    result: "Total",
    finally(num1: number, num2: number){
         return this.some + num1 + num2
    }
    
}

console.log(obj.finally(50,90));


// union type------------ !important

type UserRole = "admin" | "user" // it is litarel, it means induvisual

const getDashboard = (role: UserRole) => {
    if(role === "admin"){
        return "Admin Dashboard"
    }else if(role === "user"){
        return "User Dashboard"
    }else{
        return "Guest"
    }
}
console.log(getDashboard("admin"));


// intersection type

type Employee = {
    id: string;
    name: string;
    phone: number
}

type Manager = {
    designation: string;
    teamSize: number
}

type EmployeeManager = Employee & Manager

const leader: EmployeeManager = {
    name: "Rono",
    id: "123",
    phone: 123,
    designation: "Full Stack",
    teamSize: 20
}
