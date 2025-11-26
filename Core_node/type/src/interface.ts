// interface use for object type data, like array, object, function
interface Iuser {
    name: string;
    roll: number;
}

// it is type intersection
type Role = {
    role: "admin" | "user"
}
type User = {
    name: string
}

type userNroll = User & Role

interface IuserNrole extends Iuser {
    role: "admin" | "user";
}

type Add = (n1: number, n2: number) => number;

const add: Add = (num1, num2) => num1 +num2

console.log(add(4,5));

