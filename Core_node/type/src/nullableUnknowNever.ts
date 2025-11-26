// nullable type
const getUser = (getValue: string | null) => {
    if(getValue){
        console.log("Get Current User", getValue);
    }else{
        console.log("Get All User");
        
    }
}
// getUser("Im Rono")

// unknown type 

const productCalculate = (getValu: unknown) => {
    if(typeof getValu === "number"){
        console.log("Number", getValu);
    }else if(typeof getValu === "string"){
        console.log(getValu.split(" ")[0]);
        const [value] = getValu.split(" ");
        // console.log(value);
    }else{
        console.log("Wong input");
    }
}
// productCalculate(100)
// productCalculate("100 tk")
// productCalculate(null)

// void

const throwError = (msg: string): never => {
    throw new Error (msg)
}
throwError("new Error")
