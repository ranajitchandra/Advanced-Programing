

const kgToGM = (getValue: string | number): string | number | undefined => {
    if (typeof getValue === "number") {
        return getValue * 1000;
    } else if (typeof getValue === "string") {
        const [result] = getValue.split(" ")
        return `result: ${Number(result) * 1000}`;
    }
}

console.log(

    (kgToGM(2) as number).toString()
);
console.log(

    kgToGM("4 kg") as string
);


// example---
interface CustomError {
  message: string;
  code?: number;
}
try {
    throw { message: "Something went wrong", code: 400 };
} catch (err) {
    console.log((err as CustomError).code);

}
