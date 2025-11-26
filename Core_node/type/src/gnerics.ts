// dynamically generalize

//  

const myData: String[] = ["a", "b", "c"]
const myData2: Array<string> = ["a", "b", "c"]


type GenericArray =Array<number>
const myNumbe1: GenericArray= [1, 2, 3]

type  GenericArray2<getValue> = Array<getValue> // it is type script peramiter. T
const myNumber2: GenericArray2<number> = [1, 2, 3] // this use like fn, to pass value

const sqrFn = (value: number) => {
    return value * 2
}

sqrFn(4)


// toouple

type Coordinates<X,Y> = [X,Y]

const Coordinates1:Coordinates<number,number> = [1,2]

//  Generic use for array of object



const userList = [
    {
        userName: "Rono",
        roll: 321
    }
]




