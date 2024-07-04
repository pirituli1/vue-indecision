const numberArray = [1,2,3,4,5]; // para hacerlo de solo lectura agregar 'as const'

numberArray.push(6);// al intentar esto. es posible porque no es un string u otro tipo de dato, al intentar meter otro dato

console.log({numberArray});

const numberArray2:number[] = [...numberArray]; // forma de decirle que solo sean números. Si quisiera números y letras se puede...
// * const numberArray2:(number|string)[] = [...numberArray];
numberArray2.push(7);