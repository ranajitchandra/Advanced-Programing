// ? ternary oparator -- for dicition making
// nullish coalescing oparator: null or undefined -- it is work for null and undefiend
// optional chinaning

const userAge = 21



const eligible = (age: number) => {
    if (age >= 21) {
        // console.log("You are eligible");
    } else {
        // console.log("not eligible");
    }
    const result = age >= 21 ? "Go On" : "Not"
    // console.log(result);

}

eligible(22)

const userTheme = undefined

const selectedTheme = userTheme ?? "Light_theme" // check true

// console.log(selectedTheme);

// nullish coalising

const isTrue = ""

const a = isTrue ? isTrue : "for not true, get value"
const b = isTrue ?? "defoult: value"

// console.log({a},{b});


// optional chaining

const userData: {
    address: {
        city: string;
        town: string;
        postalCode?: number;
    }
} = {
    address: {
        city: "dhaka",
        town: "Mohakhali",
    }
}

// console.log(userData?.address?.postalCode);


